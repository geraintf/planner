require('dotenv').config();

import 'source-map-support/register';
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';

import { TodoController } from './controllers';


import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

import { enhanceProps } from './middleware';
import configurePassport from './lib/configurePassport';
import getPort from './lib/getPort';
import { dbConnect } from './lib/db';

import render from './render';
import router from './routes';

import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();
const PORT = getPort();
const DEV = process.env.NODE_ENV === 'development';

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

dbConnect();

app.use(express.static('dist'));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }));

if (DEV) {
  app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(expressSession({ secret: process.env.COOKIE_KEY, resave: true, saveUninitialized: true }));

configurePassport(app);

app.use(enhanceProps);

app.use(router);

app.get('/test', async (req, res, next) => {
  await TodoController.add('5afe123d08150e47c45ee9e1', Date.now(), 'todo');
  next();
});

app.get('*', render);

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log(` 
  ${chalk.cyan('=======================================')}
   App server now running on port ${PORT}
  ${chalk.cyan('=======================================')}
`);
});
/* eslint-enable no-console */

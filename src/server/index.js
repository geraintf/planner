require('dotenv').config();

import 'source-map-support/register';
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

import { enhanceProps } from './middleware';
import configurePassport from './lib/configurePassport';
import getPort from './lib/getPort';
import { dbConnect } from './lib/db';

import render from './render';
import router from './routes';

const app = express();
const PORT = getPort();
const DEV = process.env.NODE_ENV === 'development';
const MongoStore = connectMongo(expressSession);

dbConnect();

app.use(express.static('dist'));

if (DEV) {
  app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(expressSession({
  secret: process.env.COOKIE_KEY,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

configurePassport(app);

app.use(enhanceProps);

app.use(router);

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

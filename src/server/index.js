require('dotenv').config();

import 'source-map-support/register';
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';


import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

import configurePassport from './lib/configurePassport';
import getPort from './lib/getPort';
import { dbConnect } from './lib/db';

import render from './render';
import router from './routes';

const app = express();
const PORT = getPort();
const DEV = process.env.NODE_ENV === 'development';

dbConnect();

app.use(express.static('dist'));

if (DEV) {
  app.use(morgan('dev'));
}

app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));
app.use(cookieParser());

configurePassport(app);

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

require('dotenv').config();

import 'source-map-support/register';
import express from 'express';
import React from 'react';
import chalk from 'chalk';
import morgan from 'morgan';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

import configurePassport from './lib/configurePassport';
import getPort from './lib/getPort';
import { dbConnect } from './lib/db';
import { serverStore } from '../configureStores';

import manifestJson from '../../dist/manifest.json';
import Html from '../html';
import App from '../App';
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

app.get('*', async (req, res) => {

  const store = serverStore({}, req);

  const initialState = store.getState();
  const context = {};

  const components = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  renderToNodeStream(
    <Html
      content={components}
      initialState={initialState}
      manifest={manifestJson}
    />
  ).pipe(res);
});

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log(` 
  ${chalk.cyan('=======================================')}
   App server now running on port ${PORT}
  ${chalk.cyan('=======================================')}
`);
});
/* eslint-enable no-console */

require('dotenv').config();

import 'source-map-support/register';

import express from 'express';
import React from 'react';
import chalk from 'chalk';
import morgan from 'morgan';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import getPort from './lib/getPort';
import { serverStore } from '../configureStores';


import Html from '../html';
import App from '../App';

const app = express();
const PORT = getPort();
const DEV = process.env.NODE_ENV === 'development';

app.use(express.static('public'));

if (DEV) {
  app.use(morgan('dev'));
}

app.get('*', (req, res) => {
  const store = serverStore({}, req);

  const initialState = store.getState();

  const components = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(components);

  res.send(`<!doctype html>\n${renderToStaticMarkup(<Html content={html} initialState={initialState} />)}`);
});

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log(` 
  ${chalk.cyan('========================================')}
   App server now running on port ${PORT}
  ${chalk.cyan('========================================')}
`);
});
/* eslint-enable no-console */

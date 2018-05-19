import React from 'react';
import { Provider } from 'react-redux';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { serverStore } from '../configureStores';
import Html from '../html';
import App from '../App';

import manifestJson from '../../dist/manifest.json';

export default async (req, res) => {
  const store = serverStore({}, req);

  const initialState = store.getState();
  const context = {};

  const components = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  renderToNodeStream(
    <Html
      content={components}
      initialState={initialState}
      manifest={manifestJson}
    />)
    .pipe(res);
};

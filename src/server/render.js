import React from 'react';
import { Provider } from 'react-redux';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchPath } from 'react-router'

import { serverStore } from '../configureStores';
import Html from '../html';
import App from '../App';
import routes from '../routes';

import manifestJson from '../../dist/manifest.json';

export default async (req, res) => {

  const promises = [];

  const matches = routes.reduce((acc, route) => {
    const match = matchPath(req.url, route.path, route);

    if (match) {
      if (typeof route.component.fetchData === 'function') {
        promises.push(route.component.fetchData);
      }

      acc.push(match);
    }

    return acc;
  }, []);

  if (matches.length === 0) {
    //404
  }

  const data = await Promise.all(promises);

  console.log(req.props)

  const store = serverStore({ ...req.props }, req);

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

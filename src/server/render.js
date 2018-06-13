import React from 'react';
import { Provider } from 'react-redux';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchPath } from 'react-router'

import { serverStore } from '../configureStores';
import Html from '../html';
import App from '../App';
import routes from '../routes';
import { getFullUrl } from '../utils/url-utils';

import manifestJson from '../../dist/manifest.json';

const buildInitialState = (req, data = {}) => ({
  ...(req.props.user && { user: req.props.user }),
  ...(data.todo && { todos: data.todo.todos })
});

export default async (req, res) => {

  const promises = [];

  const matches = routes.reduce((acc, route) => {
    const match = matchPath(req.url, route.path, route);

    if (match) {
      if (typeof route.component.fetchData === 'function') {
        promises.push(route.component.fetchData(getFullUrl(req)));
      }

      acc.push(match);
    }

    return acc;
  }, []);

  if (matches.length === 0) {
    //404
  }

  const results = await Promise.all(promises);

  const data = (results && results[0].data) || {};

  //todo data is an array with data objects in, maybe want to reduce and merge together

  const store = serverStore(buildInitialState(req, data), req);

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
    />)
    .pipe(res);
};

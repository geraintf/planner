import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { clientStore } from '../configureStores';

import App from '../App';

const store = clientStore(window.__initialState__); // eslint-disable-line no-underscore-dangle
delete window.__initialState__; // eslint-disable-line no-underscore-dangle

const MOUNT_NODE = document.getElementById('root');

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , MOUNT_NODE,
);

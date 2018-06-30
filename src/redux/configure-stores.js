import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';
import buildDefaultState from './build-default-state';

const configureStore = (initialState, req = {}) => {
  const enhancers = composeWithDevTools(applyMiddleware(thunk));

  return createStore(
    reducer,
    Object.assign({}, buildDefaultState(req), initialState),
    enhancers,
  );
};

export const clientStore = initialState => configureStore(initialState);

export const serverStore = (initialState, req) => configureStore(initialState, req);

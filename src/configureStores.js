import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { formatTodoDateKey } from './utils/date-utils';

const getDefaultState = () => ({
  user: {},
  todos: {},
  selectedDate: formatTodoDateKey(Date.now())
});

const configureStore = (initialState, req = {}) => {
  const enhancers = composeWithDevTools(applyMiddleware(thunk));

  return createStore(
    reducer,
    Object.assign({}, getDefaultState(req), initialState),
    enhancers,
  );
};

export const clientStore = initialState => configureStore(initialState);

export const serverStore = (initialState, req) => configureStore(initialState, req);

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const getDefaultState = () => ({
  todos: [{ id: 'fewf', text: 'onething', completed: true }, { id: 'gfgd', text: 'this is a really long todo so im just adding more words to make it longer, this is a really long todo so im just adding more words to make it longer, this is a really long todo so im just adding more words to make it longer', completed: false }, { id: 'fewgfdgf', text: 'onethliling', completed: false  }]
});

const configureStore = (initialState, req = {}) => {
  const enchancers = composeWithDevTools(applyMiddleware(thunk));

  return createStore(
    reducer,
    Object.assign({}, getDefaultState(req), initialState),
    enchancers,
  );
};

export const clientStore = initialState => configureStore(initialState);

export const serverStore = (initialState, req) => configureStore(initialState, req);

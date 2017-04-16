import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      store.replaceReducer(require('./reducers/rootReducer')); // eslint-disable-line
    });
  }

  return store;
}

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, reduxLogger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

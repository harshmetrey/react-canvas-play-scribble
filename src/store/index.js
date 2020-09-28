import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const initialState = {};
const logger = createLogger();

const middleware = [thunk];
if (window.location.href.includes('localhost')) {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

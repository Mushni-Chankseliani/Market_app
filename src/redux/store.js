import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import {
  autoLoginMiddleware,
  autoImportDataMiddleware,
  autoFetchUsersMiddleware,
} from './middleware';
import rootReducer from './reducers';

const middleware = [
  /* logger, */
  autoImportDataMiddleware,
  autoFetchUsersMiddleware,
  autoLoginMiddleware,
  thunk,
];
const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;

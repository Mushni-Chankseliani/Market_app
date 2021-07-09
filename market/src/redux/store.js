import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { autoLoginMiddleware } from './middleware';
import rootReducer from './reducers';

const middleware = [logger, autoLoginMiddleware, thunk];
const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;

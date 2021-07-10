import { combineReducers } from 'redux';
import { productsReducer } from './product-reducer';

import { userReducer } from './userReducer';
import { usersReducer } from './users-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  users: usersReducer,
});

export default rootReducer;

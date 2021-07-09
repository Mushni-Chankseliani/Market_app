import { SET_PRODUCTS } from '../action-types';

export const setProductsAction = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});

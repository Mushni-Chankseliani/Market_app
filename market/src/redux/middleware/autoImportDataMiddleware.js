import { PRODUCTS } from '../../utils/constants';
import { AUTO_IMPORT_DATA } from '../action-types';
import { setProductsAction } from '../actions/product-actions';

export const autoImportDataMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_IMPORT_DATA) {
        if (localStorage.getItem(PRODUCTS)) {
          const products = JSON.parse(localStorage.getItem(PRODUCTS));
          dispatch(setProductsAction(products));
        }
      } else {
        next(action);
      }
    };
  };
};

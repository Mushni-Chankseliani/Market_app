import { setAuthUserAction } from '../actions';
import { AUTH_TOKEN } from '../../utils/constants';
import { AUTO_LOGIN } from '../action-types/middleware-types';

export const autoLoginMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_LOGIN) {
        if (localStorage.getItem(AUTH_TOKEN)) {
          const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
          dispatch(setAuthUserAction(token));
        }
      } else {
        next(action);
      }
    };
  };
};

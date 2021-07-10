import { setAuthUserAction } from '../actions';
import { AUTH_TOKEN, AUTH_USER } from '../../utils/constants';
import { AUTO_LOGIN } from '../action-types/middleware-types';

export const autoLoginMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_LOGIN) {
        if (localStorage.getItem(AUTH_TOKEN)) {
          const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
          const userData = JSON.parse(localStorage.getItem(AUTH_USER));
          dispatch(setAuthUserAction(token, userData));
        }
      } else {
        next(action);
      }
    };
  };
};

import { USERS } from '../../utils/constants';
import { AUTO_FETCH_USERS } from '../action-types/middleware-types';
import { fetchUsersActionAsync } from '../actions/users-actions';

export const autoFetchUsersMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_FETCH_USERS && !localStorage.getItem(USERS)) {
        dispatch(fetchUsersActionAsync());
      } else {
        next(action);
      }
    };
  };
};

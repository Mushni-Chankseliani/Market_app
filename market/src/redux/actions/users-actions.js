import { fetchUsers } from '../../services';
import { USERS } from '../../utils/constants';
import {
  FETCH_USERS_ATTEMPT,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from '../action-types/users-types';

export const fetchUsersAttemptAction = () => ({
  type: FETCH_USERS_ATTEMPT,
});

export const fetchUsersSuccessAction = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailureAction = (payload) => ({
  type: FETCH_USERS_FAILURE,
  payload,
});

export const fetchUsersActionAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersAttemptAction());
      const data = await fetchUsers();
      if (data) {
        const newList = data.data;
        localStorage.setItem(USERS, JSON.stringify(newList));
      }
      dispatch(fetchUsersSuccessAction(data));
    } catch (error) {
      dispatch(fetchUsersFailureAction(error));
    }
  };
};

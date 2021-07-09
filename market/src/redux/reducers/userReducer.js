import * as actionType from '../action-types/auth-types';

const initialState = {
  error: null,
  auth: null,
  userData: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth
    case actionType.SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
        userData: {},
      };
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
        userData: action.userData,
      };

    default:
      return state;
  }
};

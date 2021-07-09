import * as actionType from '../action-types/auth-types';

const initialState = {
  error: null,
  auth: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth
    case actionType.SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
      };
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };

    default:
      return state;
  }
};

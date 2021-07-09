import * as actionType from '../action-types';

const initialState = {
  data: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

// types
import * as actionTypes from './user-type';

const initialState = { data: null, isLoading: false, error: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USERS_REQUEST:
      return { data: state.data, isLoading: true, error: null };

    case actionTypes.ADD_USER_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };

    case actionTypes.ADD_USER_FAILURE:
      return {
        data: state.data,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

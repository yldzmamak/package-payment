// types
import * as actionTypes from '../user/user-type';

// utils
// import api from '../../../utils/api';

export const signUp = user => async (dispatch, getState) => {
  dispatch({ type: actionTypes.ADD_USERS_REQUEST });

  try {
    // await api.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}signup`, user);

    dispatch({
      type: actionTypes.ADD_USER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_USER_FAILURE, payload: error });
  }
};

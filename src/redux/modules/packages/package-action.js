import api from '../../../utils/api';

import * as actionTypes from '../packages/package-type';

export const getPackages = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.GET_PACKAGES_REQUEST });

  try {
    const response = await api.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/packages`);

    dispatch({
      type: actionTypes.GET_PACKAGES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PACKAGES_FAILURE, payload: error });
  }
};

export const setPackages = id => (dispatch, getState) => {
  dispatch({ type: actionTypes.SET_SELECTED_PACKAGES, payload: id });
};

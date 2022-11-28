// types
import * as actionTypes from '../payment/payment-type';

// utils
import api from '../../../utils/api';


export const getPaymentContent = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.GET_PAYMENT_REQUEST });

  try {
    const response = await api.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}payment`, payment);

    dispatch({
      type: actionTypes.GET_PAYMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PAYMENT_FAILURE, payload: error });
  }
};

export const payment = payment => async (dispatch, getState) => {
  dispatch({ type: actionTypes.ADD_PAYMENT_REQUEST });

  try {
    const response = await api.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}payment`, payment);

    dispatch({
      type: actionTypes.ADD_PAYMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_PAYMENT_FAILURE, payload: error });
  }
};

// types
import * as actionTypes from './payment-type';

const initialState = { data: null, isLoading: false, error: null };

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PAYMENT_REQUEST:
      return { data: state.data, isLoading: true, error: null };

    case actionTypes.GET_PAYMENT_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };

    case actionTypes.GET_PAYMENT_FAILURE:
      return {
        data: state.data,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.ADD_PAYMENT_REQUEST:
      return { data: state.data, isLoading: true, error: null };

    case actionTypes.ADD_PAYMENT_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };

    case actionTypes.ADD_PAYMENT_FAILURE:
      return {
        data: state.data,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;

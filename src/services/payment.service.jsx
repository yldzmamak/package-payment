import api from './api';

export const getPaymentContent = () => {
  return api.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/payment`);
};

export const payment = paymentInfo => {
  return api.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/payment`, paymentInfo);
};

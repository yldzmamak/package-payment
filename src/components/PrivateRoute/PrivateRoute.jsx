import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useAuth() {
  return useSelector(({ users }) => users.data);
}

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;

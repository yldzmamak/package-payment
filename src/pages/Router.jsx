import React from 'react';

// components
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

// layouts
import { PublicLayout, PrivateLayout } from '../layouts';

// pages
import { PersonalInfo, PackageList, PaymentDetail, Success } from '../pages';

//router dom
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PersonalInfo />} exact />
      </Route>

      <Route
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path="/package-list" element={<PackageList />} />
        <Route path="/payment" element={<PaymentDetail />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
};

export default Router;

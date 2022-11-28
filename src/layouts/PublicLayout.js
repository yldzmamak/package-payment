import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <>
      <Layout className="layout layout-public">
        <Outlet />
      </Layout>
    </>
  );
};
export default PublicLayout;

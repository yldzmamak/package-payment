import React from 'react';
import { Layout } from 'antd';
import { Header } from '../container';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const PrivateLayout = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>

        <Content className='private-content'>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};
export default PrivateLayout;

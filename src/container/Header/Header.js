import React from 'react';

//components
import { Layout } from 'antd';

// redux
import { useSelector } from 'react-redux';

// styles
import './header.scss';

const { Header: AntHeader } = Layout;

const Header = ({ ...otherProps }) => {
  const user = useSelector(({ users }) => users.data);
  return (
    <AntHeader className="app-header" {...otherProps}>
      <div className="header-container">
        <span className="icon-logo">
          <span className="path1"></span>
          <span className="path2"></span>
          <span className="path3"></span>
          <span className="path4"></span>
          <span className="path5"></span>
        </span>

        <div className='user-info'>
          <span className="icon-avatar">
            <span className="path1"></span>
            <span className="path2"></span>
          </span>
          {user.fullName}
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;

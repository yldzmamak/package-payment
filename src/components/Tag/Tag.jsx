import React from 'react';

import { Tag as AntTag } from 'antd';

const Button = ({ ...otherProps }) => {
  return <AntTag {...otherProps} />;
};

export default Button;

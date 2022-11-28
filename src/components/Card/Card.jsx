import React from 'react';

import { Card as AntCard } from 'antd';

const Card = ({ ...otherProps }) => {
  return <AntCard {...otherProps} />;
};

export default Card;

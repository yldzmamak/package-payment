import React from 'react';
import { Card } from '../../components';

import './success.scss';

const Success = () => {
  return (
    <Card>
      <div className="success-content">
        <div className="icon-container">
          <i className="icon icon-success"></i>
        </div>
        <h1>Başarıyla Tamamlandı!</h1>
      </div>
    </Card>
  );
};

export default Success;

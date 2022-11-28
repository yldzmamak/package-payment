import React from 'react';

import { useSelector } from 'react-redux';

import { Col, Row, message } from 'antd';
import { Card, PackageLabel, Button } from '../../components';
import { useNavigate } from 'react-router-dom';

import './payment.scss';

const PaymentDetail = () => {
  const packages = useSelector(({ packages }) =>
    packages.data.filter(item => item.selected === true),
  );

  const navigate = useNavigate();

  const pay = () => {
    let selectedPackages = packages.some(item => item.selected);
    selectedPackages
      ? navigate('/success')
      : message.open({
          type: 'warning',
          content: 'Ödemek için en az bir paket seçiniz.',
        });
  };

  return (
    <Row className="payment-container">
      <Col xs={24} md={15} className="column">
        <Card>
          <span className="title">Kart Bilgileri</span>
        </Card>
      </Col>
      <Col xs={24} md={9} className="column">
        <Card>
          <span className="title">Sepetteki Paketler</span>
          {packages?.map(item => (
            <Col key={item.id}>
              <div>
                <PackageLabel packageDetail={item}></PackageLabel>
              </div>
            </Col>
          ))}
          <Button type="primary" onClick={() => pay()} className="pay-button">
            Ödeme Yap
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default PaymentDetail;

import { Col, Row, Divider, message } from 'antd';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { packageAction } from '../../redux/modules';
import { useNavigate } from 'react-router-dom';
import { Button, Card, PackageCard } from '../../components';

import './package-list.scss';

const PackageList = () => {
  const [amount, setAmount] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(packageAction.getPackages());
  }, [dispatch]);

  const packages = useSelector(({ packages }) => packages.data);

  const selectedPackage = (id, selected) => {
    dispatch(packageAction.setPackages(id));
    var amo = 0;
    packages.forEach(element => {
      if (element.selected) {
        amo += element.amount;
      }
      setAmount(amo);
    });
  };

  const goPayment = () => {
    let selectedPackages = packages.some(item => item.selected);
    selectedPackages
      ? navigate('/payment')
      : message.open({
          type: 'warning',
          content: 'Ödemek için en az bir paket seçiniz.',
        });
  };

  return (
    <Card>
      <Row>
        {packages?.map(item => (
          <Col key={item.id} xs={24} md={12}>
            <div onClick={() => selectedPackage(item.id, item.selected)}>
              <PackageCard packageDetail={item}></PackageCard>
            </div>
          </Col>
        ))}
      </Row>
      <Divider />
      <Row className="package-list-footer">
        <Col xs={24} md={18}>
          Seçilen Paket Tutarı: {amount}₺
        </Col>
        <Col xs={24} md={6}>
          <Button type="primary" onClick={() => goPayment()} className="continue-button">
            Devam Et
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default PackageList;

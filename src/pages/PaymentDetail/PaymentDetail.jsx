import React, { useEffect } from 'react';

// components
import { Col, Row, Form } from 'antd';
import { Card, PackageLabel, Button, Input } from '../../components';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { paymentAction } from '../../redux/modules';

// router dom
import { useNavigate } from 'react-router-dom';

// styles
import './payment.scss';

const PaymentDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(paymentAction.getPaymentContent());
  }, [dispatch]);

  const packages = useSelector(({ packages }) =>
    packages.data.filter(item => item.selected === true),
  );
  const content = useSelector(({ payment }) => payment?.data?.content);

  const navigate = useNavigate();

  const pay = async values => {
    await dispatch(paymentAction.payment(values));
    navigate('/success');
  };

  const validateMessages = {
    required: 'Zorunlu Alan',
    types: {
      email: 'Geçersiz E-Mail',
    },
  };

  return (
    <Row className="payment-container">
      <Col xs={24} md={15} className="column">
        <Card>
          <span className="title">Kart Bilgileri</span>
          <Form
            name="normal_login"
            className="payment-form"
            size="large"
            id="my-form"
            layout={'vertical'}
            validateMessages={validateMessages}
            onFinish={pay}
          >
            <Col xs={24} md={12} className="column">
              <Form.Item
                name={'cardHolderName'}
                label="Kart Üzerindeki İsim Soyisim"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input size={'large'} maxLength={255} />
              </Form.Item>
            </Col>

            <Row>
              <Col xs={24} md={12} className="column">
                <Form.Item
                  name={'cardNumber'}
                  label="Kart Numarası"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size={'large'} maxLength={16} />
                </Form.Item>
              </Col>
              <Col xs={24} md={6} className="column">
                <Form.Item
                  name={'expireDate'}
                  label="Son Kul. Tar."
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size={'large'} maxLength={5} />
                </Form.Item>
              </Col>
              <Col xs={24} md={6} className="column">
                <Form.Item
                  name={'cvv'}
                  label="CVV/CVC"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size={'large'} maxLength={3} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div className="contract-container">
            <span className="title">Sözleşme</span>
            <div className="payment-form" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
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
          <Button form="my-form" htmlType="submit" type="primary" className="pay-button">
            Ödeme Yap
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default PaymentDetail;

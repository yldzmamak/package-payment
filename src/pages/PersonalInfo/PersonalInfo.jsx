import React from 'react';
import { Button, Input, Card } from '../../components';
import { Form } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { userAction } from '../../redux/modules';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './personal-info.scss';

const validateMessages = {
  required: 'Zorunlu Alan',
  types: {
    email: 'Geçersiz E-Mail',
  },
};

const PersonalInfo = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const signUp = async (values) => {
    await dispatch(userAction.signUp(values.user));
    navigate('/package-list');
  };

  return (
    <Card>
      <div className="personal-info-content">
        <Form
          name="normal_login"
          className="login-form"
          size="large"
          layout={'vertical'}
          onFinish={signUp}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'fullName']}
            label="Adınız Soyadınız"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} size={'large'} />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Emailiniz"
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} size={'large'} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="continue-button">
              Devam Et
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default PersonalInfo;

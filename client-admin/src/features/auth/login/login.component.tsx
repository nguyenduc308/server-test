import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { authAction } from 'store/auth/auth-actions';

import { LoginGraphStyled, LoginPageStyled } from './login.styled';
import { ILoginCredentials } from '@type/auth.type';
import { AntdFormCustomStyled } from 'shared/styled/form.styled';
import { AuthFormWrapperStyled, AuthTitleStyled } from '../auth.styled';
import { Link, useRouteMatch } from 'react-router-dom';
import { REGISTER_PATH } from 'shared/constants/paths.const';

const LoginComponent = () => {
  const [credentials] = useState<ILoginCredentials>({
    email: 'duc@gmail.com',
    password: '123213',
  });
  const dispatch = useDispatch();

  const onSubmit = (value: ILoginCredentials) => {
    dispatch(authAction.login(value));
  };

  return (
    <LoginPageStyled>
      <AntdFormCustomStyled>
        <AuthTitleStyled>Đăng nhập</AuthTitleStyled>
        <AuthFormWrapperStyled>
          <Form
            onFinish={onSubmit}
            layout="vertical"
            initialValues={credentials}
          >
            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Bạn phải nhập email!' }]}
            >
              <Input />
            </Form.Item>
            {/* Password */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {/* Button Submit */}
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                <LoginOutlined /> Đăng nhập{' '}
              </Button>
            </Form.Item>
          </Form>
          <LoginGraphStyled>
            Bạn chưa có tài khoản?
            <Link to={REGISTER_PATH}> Đăng ký</Link>
          </LoginGraphStyled>
        </AuthFormWrapperStyled>
      </AntdFormCustomStyled>
    </LoginPageStyled>
  );
};

export default LoginComponent;

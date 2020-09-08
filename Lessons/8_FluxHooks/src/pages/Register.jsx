import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { UsersDispatch } from '../state/Contexts';
import { sendUser } from '../state/requests';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const Register = () => {
  let history = useHistory();
  const { dispatch } = useContext(UsersDispatch);

  const onFinish = async (values) => {
    const user = { login: values.username, pass: values.password, other: values.other };
    history.push('/login');
    const newUser = await sendUser(user);
    dispatch({ type: 'add', payload: newUser });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('onFinishFailed -> errorInfo', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label="Other fields" name="other">
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary">
          <Link to="/login">Exit to Login</Link>
        </Button>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

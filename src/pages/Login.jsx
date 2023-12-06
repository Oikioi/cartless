import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input,AutoComplete } from 'antd';
import "./login.css"



export const LoginForm = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  const onFinish = (values) => {
  console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  } ;
  // onFinish={onFinish}
  // onFinishFailed={onFinishFailed}
  // AutoComplete="off";

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  // const onFinish = (values) => {
  //   console.log('Finish:', values);
  // };

  return (
    <Form form={form} name="horizontal_login" layout="verticle" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
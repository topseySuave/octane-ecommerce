import React from "react";
// import Router from "next/router";
import { Input, Icon, Button, Typography, Form, Checkbox } from "antd";
import { Link } from "lib/routes";

interface Props {
  form: any;
}

class SignInForm extends React.PureComponent<Props> {
  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
          </div>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: '100%' }}
            >
              Sign in
            </Button>
          </div>
          Don't have an account?{" "}
          <Link prefetch href="/signup">
            <a>Register now!</a>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSignInForm = Form.create({ name: 'normal_login' })(SignInForm);

export default WrappedSignInForm;

import React from "react";
import Router from "next/router";
import { Input, Icon, Button, Form, Checkbox } from "antd";
import { Link } from "lib/routes";
import connectComponent from "lib/connectComponents";
import { signInUser } from 'lib/actions/auth.actions';

interface Props {
  form: any;
  signInUser: (valu: object) => void;
  authReducer: any;
}

class SignInForm extends React.PureComponent<Props> {
  state: any = {
    loading: this.props.authReducer.loading
  };

  componentWillReceiveProps(newProps: any) {
    if(newProps.authReducer.user.accessToken) {
      this.setState({ loading: newProps.authReducer.loading });
      return Router.push('/shop');
    }
  }

  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.setState({ loading: !this.state.loading });
        this.props.signInUser(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
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
              loading={loading}
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

export default connectComponent(WrappedSignInForm, { signInUser });

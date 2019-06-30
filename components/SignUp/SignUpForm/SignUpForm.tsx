import React from "react";
import { Input, Icon, Button, Form, Checkbox } from "antd";
import { Link } from "lib/routes";
import _ from "lodash";
import { openNotificationWithIcon } from "lib/utils";
import connectComponent from "lib/connectComponents";
import { signUpUser } from 'lib/actions/auth.actions';
import Router from "next/router";

interface Props {
  form: any;
  signUpUser: (userData: any) => Function;
  authReducer: any;
}

class SignUpForm extends React.PureComponent<Props> {
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
        if (_.isEqual(values.email, values.confirmEmail)) {
          this.setState({ loading: !this.state.loading });
          return this.props.signUpUser(values);
        }
        return openNotificationWithIcon('error', 'Emails do not match');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Name"
            />,
          )}
        </Form.Item>
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
          {getFieldDecorator('confirmEmail', {
            rules: [{ required: true, message: 'Please input your email again!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Confirm Email"
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
              Sign up
            </Button>
          </div>
          Already have an account?{" "}
          <Link prefetch href="/signin">
            <a>Sign in</a>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSignUpForm = Form.create({ name: 'normal_login' })(SignUpForm);

export default connectComponent(WrappedSignUpForm, {signUpUser});

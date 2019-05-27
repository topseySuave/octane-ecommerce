import { useState } from 'react';
import Router from 'next/router';
import { Input, Icon, Button, Typography } from 'antd';
import WithSocialMedia from 'components/WithSocialMedia';
import Link from 'next/Link';

const SigninForm = () => {
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Router.push('/');
    }, 5000);
  };

  return (
    <>
      <form>
        <Input
          placeholder="Enter your Name"
          type="text"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input
          placeholder="Enter your Email"
          type="email"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input
          placeholder="Confirm your Email"
          type="email"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="input password"
        />
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Confirm password"
        />
        <Button type="primary" loading={loading} onClick={login} block>
          Sign Up
        </Button>
      </form>
      <Typography.Text style={{ textAlign: 'center' }}>
        Already have an account? <Link href="/signin"><a>sign in</a></Link>
      </Typography.Text>
      <WithSocialMedia />
    </>
  );
};

export default SigninForm;

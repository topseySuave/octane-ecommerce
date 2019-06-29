import SigninForm from './SigninForm';

import './SignIn.scss';
import Logo from 'components/ui/Logo';
import { isWindows } from 'lib/constants';
import { useEffect } from 'react';
import { getUserData } from 'lib/utils';
import Router from 'next/router';

const SignIn = () => {
  useEffect(() => {
    if (isWindows && getUserData().accessToken) Router.push('/shop');
  }, []);

  return (
    <div className="signin-container">
      <Logo />
      <SigninForm />
    </div>
  );
};

export default SignIn;

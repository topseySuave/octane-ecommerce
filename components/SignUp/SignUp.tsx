import SignUpForm from './SignUpForm';

import './SignUp.scss';
import Logo from 'components/ui/Logo';
import { getUserData } from 'lib/utils';
import Router from 'next/router';
import { isWindows } from 'lib/constants';
import { useEffect } from 'react';

const SignUp = () => {
  useEffect(() => {
    if (isWindows && getUserData().accessToken) Router.push('/shop');
  }, []);

  return (
    <div className="signup-container">
      <Logo />
      <SignUpForm />
    </div>
  );
};

export default SignUp;

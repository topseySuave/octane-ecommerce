import { shallow } from 'enzyme';
import React from 'react';

import SignUpForm from './SignUpForm';

describe('SignUpForm', () => {
  it('Renders with sign up form', () => {
    const tree = shallow(<SignUpForm />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Profile />);
    // const profile = mounted.find('content');
    // console.log(profile);
  });
});

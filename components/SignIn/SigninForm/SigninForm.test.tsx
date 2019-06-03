import { shallow } from 'enzyme';
import React from 'react';

import SigninForm from './SigninForm';

describe('SigninForm', () => {
  it('Renders with sign in form', () => {
    const tree = shallow(<SigninForm />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Profile />);
    // const profile = mounted.find('content');
    // console.log(profile);
  });
});

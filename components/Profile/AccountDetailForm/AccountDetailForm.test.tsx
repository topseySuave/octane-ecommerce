import { shallow } from 'enzyme';
import React from 'react';

import AccountDetailForm from './AccountDetailForm';

describe('AccountDetailForm', () => {
  it('Renders with default form', () => {
    const tree = shallow(<AccountDetailForm />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Profile />);
    // const profile = mounted.find('content');
    // console.log(profile);
  });
});

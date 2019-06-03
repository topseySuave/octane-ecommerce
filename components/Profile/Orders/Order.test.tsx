import { shallow } from 'enzyme';
import React from 'react';

import Orders from './Orders';

describe('Orders', () => {
  it('Renders with user profile tabs settings', () => {
    const tree = shallow(<Orders />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Profile />);
    // const profile = mounted.find('content');
    // console.log(profile);
  });
});

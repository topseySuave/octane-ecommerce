import { shallow } from 'enzyme';
import React from 'react';

import ShippingForm from './ShippingForm';

describe('Orders', () => {
  it('Renders with user profile tabs settings', () => {
    const tree = shallow(<ShippingForm />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Profile />);
    // const profile = mounted.find('content');
    // console.log(profile);
  });
});

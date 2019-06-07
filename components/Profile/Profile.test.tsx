import { shallow } from 'enzyme';
import React from 'react';

import Profile from './Profile';

describe('Profile', () => {
  it('Renders with user profile tabs settings', () => {
    const tree = shallow(<Profile />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Profile />);
    // const profile = mounted.find('content');
    // console.log(profile);
  });
});

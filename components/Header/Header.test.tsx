import { shallow } from 'enzyme';
import React from 'react';

import Header from './Header';

describe('Header', () => {
  it('Renders with default color/size', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Header />);
    // const header = mounted.find('header');
    // console.log(header);
    // expect(header.hasClass('main-header-container')).toBeTruthy();
  });
});

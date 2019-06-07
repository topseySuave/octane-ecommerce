import { shallow } from 'enzyme';
import React from 'react';

import SavedItems from './SavedItems';

describe('SavedItems', () => {
  it('Renders with saved items', () => {
    const tree = shallow(<SavedItems />);
    expect(tree).toMatchSnapshot();
    // const mounted = shallow(<Header />);
    // const header = mounted.find('header');
    // console.log(header);
    // expect(header.hasClass('main-header-container')).toBeTruthy();
  });
});

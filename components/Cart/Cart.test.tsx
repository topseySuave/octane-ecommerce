import React from 'react';
import renderer from 'react-test-renderer';

import Cart from './Cart';

describe('Cart View', () => {
  it('Renders with horizontal card only', () => {
    const tree = renderer.create(<Cart />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

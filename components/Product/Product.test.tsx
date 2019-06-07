import React from 'react';
import renderer from 'react-test-renderer';

import Product from './Product';

describe('Product', () => {
  it('Renders the detail of a product', () => {
    const tree = renderer.create(<Product />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

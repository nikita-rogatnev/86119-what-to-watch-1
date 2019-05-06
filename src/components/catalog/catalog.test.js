import React from 'react';
import renderer from 'react-test-renderer';

import Catalog from './catalog';

it(`Catalog renders correctly`, () => {
  const tree = renderer.create(<Catalog/>).toJSON();
  expect(tree).toMatchSnapshot();
});

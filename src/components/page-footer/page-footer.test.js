import React from 'react';
import renderer from 'react-test-renderer';

import PageFooter from './page-footer';

it(`PageFooter renders correctly`, () => {
  const tree = renderer.create(<PageFooter/>).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import PageContent from './page-content';

it(`PageContent renders correctly`, () => {
  const tree = renderer.create(<PageContent/>).toJSON();
  expect(tree).toMatchSnapshot();
});

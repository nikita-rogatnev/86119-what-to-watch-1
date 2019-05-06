import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from './movies-list';

it(`MoviesList renders correctly`, () => {
  const tree = renderer.create(<MoviesList/>).toJSON();
  expect(tree).toMatchSnapshot();
});

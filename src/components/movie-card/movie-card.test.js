import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card';

it(`MovieCard renders correctly`, () => {
  const tree = renderer.create(<MovieCard/>).toJSON();
  expect(tree).toMatchSnapshot();
});

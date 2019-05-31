import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from './movies-list';

import moviesList from '../../films/films';

it(`MoviesList renders correctly`, () => {
  const tree = renderer.create(<MoviesList
    movies={moviesList}
    onChange={() => {
    }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

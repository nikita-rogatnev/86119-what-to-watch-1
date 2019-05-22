import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list';

import moviesList from '../../mocks/movies';

it(`GenresList renders correctly`, () => {
  const activeGenre = `All genres`;

  const tree = renderer.create(<GenresList
    movies={moviesList}
    activeGenre={activeGenre}
    onChangeGenre={() => {
    }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

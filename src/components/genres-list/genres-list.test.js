import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list';

import moviesList from '../../mocks/movies';

it(`GenresList renders correctly`, () => {
  const activeGenre = `All genres`;

  let genresList = Array.from(new Set(moviesList.map(({genre}) => genre)));
  genresList.unshift(`All genres`);

  const tree = renderer.create(<GenresList
    movies={moviesList}
    allGenres={genresList}
    activeItem={activeGenre}
    onChange={() => {
    }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

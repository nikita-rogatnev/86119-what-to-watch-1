import React from 'react';
import renderer from 'react-test-renderer';

import FiltersList from './filters-list';

import moviesList from '../../mocks/movies';

it(`FiltersList renders correctly`, () => {
  const activeGenre = `All genres`;

  let filtersList = Array.from(new Set(moviesList.map(({genre}) => genre)));
  filtersList.unshift(`All genres`);

  const tree = renderer.create(<FiltersList
    movies={moviesList}
    allGenres={filtersList}
    activeItem={activeGenre}
    onActiveGenreChange={() => {
    }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

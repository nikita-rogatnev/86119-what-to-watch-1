import React from 'react';
import renderer from 'react-test-renderer';

import Catalog from './catalog';

it(`Catalog renders correctly`, () => {
  const currentFilter = `All genres`;

  let genresList = Array.from(new Set(moviesList.map(({genre}) => genre)));
  genresList.unshift(`All genres`);

  const tree = renderer.create(<Catalog
    movies={moviesList}
    allGenres={genresList}
    currentFilter={currentFilter}
    onChangeGenre={() => {
    }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

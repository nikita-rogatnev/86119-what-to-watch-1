import React from 'react';
import renderer from 'react-test-renderer';

import Catalog from './catalog';

import moviesList from '../../mocks/movies';

it(`Catalog renders correctly`, () => {
  const activeGenre = `All genres`;

  const tree = renderer.create(<Catalog
    movies={moviesList}
    activeGenre={activeGenre}
    onChangeGenre={() => {
    }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

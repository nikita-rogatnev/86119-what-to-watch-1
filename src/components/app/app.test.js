import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

import moviesList from '../../mocks/movies';

it(`App renders correctly`, () => {
  const activeGenre = `All genres`;

  const tree = renderer
    .create(<App
      movies={moviesList}
      activeGenre={activeGenre}
      onChangeGenre={() => {
      }}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

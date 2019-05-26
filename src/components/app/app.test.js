import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

import moviesList from '../../mocks/movies';

it(`App renders correctly`, () => {
  const activeGenre = `All genres`;

  let genresList = Array.from(new Set(moviesList.map(({genre}) => genre)));
  genresList.unshift(`All genres`);

  const tree = renderer
    .create(<App
      movies={moviesList}
      allGenres={genresList}
      activeGenre={activeGenre}
      onChangeGenre={() => {
      }}
    />).toJSON();
  
  expect(tree).toMatchSnapshot();
});

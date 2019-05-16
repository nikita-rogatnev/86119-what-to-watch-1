import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list';

const mock = {
  genres: [
    {
      "title": `All genres`,
      "isActive": true
    },
    {
      "title": `Comedies`,
      "isActive": false
    },
    {
      "title": `Crime`,
      "isActive": false
    },
  ]
};

it(`GenresList renders correctly`, () => {
  const {genres} = mock;
  const tree = renderer.create(<GenresList genres={genres}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

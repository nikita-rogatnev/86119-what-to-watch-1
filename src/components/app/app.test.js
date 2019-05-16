import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

const mock = {
  films: [
    {
      id: 1,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      link: `movie-page.html`
    },
    {
      id: 2,
      name: `Bohemian Rhapsody`,
      link: `movie-page.html`
    },
    {
      id: 3,
      name: `Macbeth`,
      link: `movie-page.html`
    },
  ],
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

it(`App renders correctly`, () => {
  const {films, genres} = mock;

  const tree = renderer.create(<App films={films} genres={genres}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

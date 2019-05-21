import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from './movies-list';

const mock = {
  films: [
    {
      id: 1,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      link: `movie-page.html`,
      teaser: `https://some-teaser.ru/teaser.mp4`
    },
    {
      id: 2,
      name: `Bohemian Rhapsody`,
      link: `movie-page.html`,
      teaser: `https://some-teaser.ru/teaser.mp4`
    },
    {
      id: 3,
      name: `Macbeth`,
      link: `movie-page.html`,
      teaser: `https://some-teaser.ru/teaser.mp4`
    },
  ],
};

it(`MoviesList renders correctly`, () => {
  const {films} = mock;

  const tree = renderer.create(<MoviesList films={films}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card';

it(`SmallMovieCard renders correctly`, () => {
  const clickHandler = jest.fn();

  const tree = renderer
    .create(<SmallMovieCard
      key={0}
      movieName={`Test name`}
      movieLink={`http://test-link.com/`}
      movieLinkClick={clickHandler}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

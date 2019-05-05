import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card';

it(`SmallMovieCard renders correctly`, () => {
  const clickHandler = jest.fn();

  const tree = renderer
    .create(<SmallMovieCard
      movieName={`Test name`}
      movieLink={`http://test-link.com/`}
      onClick={clickHandler}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

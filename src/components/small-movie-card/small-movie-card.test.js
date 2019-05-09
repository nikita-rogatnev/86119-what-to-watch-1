import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card';

it(`SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      key={0}
      movieName={`Test name`}
      movieLink={`http://test-link.com/`}
      movieButtonClick={jest.fn()}
      movieLinkClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

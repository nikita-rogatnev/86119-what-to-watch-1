import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card';

it(`SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      key={0}
      movieName={`Test name`}
      movieFile={`Test file`}
      movieLink={`Test link`}
      movieLinkClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

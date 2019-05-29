import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card';

it(`SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      key={0}
      name={`Test name`}
      teaser={`Test file`}
      link={`Test link`}
      onHover={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

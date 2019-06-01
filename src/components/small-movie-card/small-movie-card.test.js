import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card';

import mockData from '../../mocks/mock-data';

it(`SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      key={mockData.id}
      name={mockData.name}
      previewVideoSrc={mockData.previewVideoSrc}
      previewImageSrc={mockData.previewImageSrc}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

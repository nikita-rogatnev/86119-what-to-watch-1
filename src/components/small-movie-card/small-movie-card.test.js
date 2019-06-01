import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card';

const mockData = {
  "id": 1,
  "name": `Seven Years in Tibet`,
  "previewImageSrc": `https://es31-server.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
  "previewVideoSrc": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

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

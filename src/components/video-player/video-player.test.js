import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

import mockData from '../../mocks/mock-data';

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      previewVideoSrc={mockData.previewVideoSrc}
      previewImageSrc={mockData.previewImageSrc}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

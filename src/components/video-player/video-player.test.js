import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import VideoPlayer from './video-player';

import mockData from '../../mocks/mock-data';

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><VideoPlayer
      previewImage={mockData[0].previewImage}
      previewVideoLink={mockData[0].previewVideoLink}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

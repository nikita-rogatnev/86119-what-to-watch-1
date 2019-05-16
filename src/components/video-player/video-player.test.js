import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={`Test src`}
      movieFile={`Test file`}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

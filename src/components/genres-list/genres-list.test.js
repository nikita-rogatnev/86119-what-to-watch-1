import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list';

it(`GenresList renders correctly`, () => {
  const tree = renderer.create(<GenresList/>).toJSON();
  expect(tree).toMatchSnapshot();
});

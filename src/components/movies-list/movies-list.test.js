import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from './movies-list';

import mockData from '../../mocks/mock-data';

it(`MoviesList renders correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      data={mockData}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

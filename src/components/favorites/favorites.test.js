import React from 'react';
import renderer from 'react-test-renderer';

import Favorites from './favorites';

import mockData from '../../mocks/mock-data';

it(`Favorites renders correctly`, () => {
  const tree = renderer
    .create(<Favorites
      data={mockData}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

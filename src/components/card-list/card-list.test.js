import React from 'react';
import renderer from 'react-test-renderer';

import CardList from './card-list';

import mockData from '../../mocks/mock-data';

it(`CardList renders correctly`, () => {
  const tree = renderer
    .create(<CardList
      data={mockData}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

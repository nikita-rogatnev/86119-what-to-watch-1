import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

import mockData from '../../mocks/mock-data';
import mockFilters from '../../mocks/mock-filters';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      data={mockData}
      filters={mockFilters}
      currentFilter={`All genres`}
      changeCurrentFilter={() => {
      }}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

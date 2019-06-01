import React from 'react';
import renderer from 'react-test-renderer';

import Catalog from './catalog';

import mockData from '../../mocks/mock-data';
import mockFilters from '../../mocks/mock-filters';

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(<Catalog
      data={mockData}
      filters={mockFilters}
      currentFilter={`All genres`}
      changeCurrentFilter={() => {
      }}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

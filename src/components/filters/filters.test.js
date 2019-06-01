import React from 'react';
import renderer from 'react-test-renderer';

import Filters from './filters';

import mockFilters from '../../mocks/mock-filters';

it(`Filters renders correctly`, () => {
  const tree = renderer
    .create(<Filters
      filters={mockFilters}
      currentFilter={`All genres`}
      changeCurrentFilter={() => {
      }}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

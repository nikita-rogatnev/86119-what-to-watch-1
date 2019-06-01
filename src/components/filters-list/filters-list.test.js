import React from 'react';
import renderer from 'react-test-renderer';

import FiltersList from './filters-list';

import mockFilters from '../../mocks/mock-filters';

it(`FiltersList renders correctly`, () => {
  const tree = renderer
    .create(<FiltersList
      filters={mockFilters}
      currentFilter={`All genres`}
      changeCurrentFilter={() => {
      }}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

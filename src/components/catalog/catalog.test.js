import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Catalog from './catalog';

import mockData from '../../mocks/mock-data';
import mockFilters from '../../mocks/mock-filters';

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><Catalog
      data={mockData}
      filters={mockFilters}
      currentFilter={`All genres`}
      changeCurrentFilter={() => {
      }}
      showMoreButton={false}
      showPlayButton={false}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

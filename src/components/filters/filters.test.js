import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Filters from './filters';

import mockFilters from '../../mocks/mock-filters';
import {App} from "../app/app";

it(`Filters renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><Filters
      filters={mockFilters}
      currentFilter={`All genres`}
      changeCurrentFilter={() => {
      }}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

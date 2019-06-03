import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import CardList from './card-list';

import mockData from '../../mocks/mock-data';

it(`CardList renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><CardList
      data={mockData}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Favorites from './favorites';

import mockData from '../../mocks/mock-data';

it(`Favorites renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><Favorites
      data={mockData}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

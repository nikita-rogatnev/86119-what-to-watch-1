import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import NotFound from './not-found';

it(`NotFound renders correctly`, () => {
  const tree = renderer.create(<BrowserRouter><NotFound/></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

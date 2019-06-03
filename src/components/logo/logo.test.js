import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Logo from './logo';

it(`Logo renders correctly`, () => {
  const tree = renderer.create(<BrowserRouter><Logo/></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

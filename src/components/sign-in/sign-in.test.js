import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {SignIn} from './sign-in';

jest.mock(`../header/header`, () => `Header`);

it(`SignIn renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><SignIn
      loginUser={() => jest.fn()}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

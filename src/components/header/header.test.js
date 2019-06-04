import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Header from './header';

jest.mock(`./header`, () => `Header`);

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><Header
      isLogged={false}
      isAuthorizationRequired={false}
      requireAuthorization={() => jest.fn()}
    /></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

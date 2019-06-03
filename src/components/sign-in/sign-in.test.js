import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in';

jest.mock(`../header/header`, () => `Header`);

it(`SignIn renders correctly`, () => {
  const tree = renderer
    .create(<SignIn
      loginUser={() => jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

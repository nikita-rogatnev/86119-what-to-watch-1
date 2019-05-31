import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from './sign-in';

it(`Sign In renders correctly`, () => {
  const tree = renderer.create(<SignIn/>).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header';

jest.mock(`./header`, () => `Header`);

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(<Header
      isLogged={false}
      isAuthorizationRequired={false}
      requireAuthorization={() => jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

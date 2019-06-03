import React from 'react';
import renderer from 'react-test-renderer';

import CardHuge from './card-huge';

jest.mock(`../header/header`, () => `Header`);

it(`CardHuge renders correctly`, () => {
  const tree = renderer.create(<CardHuge/>).toJSON();

  expect(tree).toMatchSnapshot();
});

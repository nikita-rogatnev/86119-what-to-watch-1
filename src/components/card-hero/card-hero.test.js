import React from 'react';
import renderer from 'react-test-renderer';

import CardHero from './card-hero';

import mockData from '../../mocks/mock-data';

jest.mock(`../header/header`, () => `Header`);

it(`CardHuge renders correctly`, () => {
  const tree = renderer
    .create(<CardHero
      data={mockData}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

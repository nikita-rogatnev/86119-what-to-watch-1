import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import CardHero from './card-hero';

import mockData from '../../mocks/mock-data';

jest.mock(`../header/header`, () => `Header`);

it(`CardHuge renders correctly`, () => {
  const data = mockData[0];

  const tree = renderer
    .create(<BrowserRouter><CardHero
      data={data}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

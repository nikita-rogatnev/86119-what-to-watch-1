import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import CardHuge from "./card-huge";

jest.mock(`../header/header`, () => `Header`);

it(`CardHuge renders correctly`, () => {
  const tree = renderer.create(<BrowserRouter><CardHuge/></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

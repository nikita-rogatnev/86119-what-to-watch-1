import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import Card from "./card";

import mockData from "../../mocks/mock-data";

it(`Card renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><Card
      key={mockData[0].id}
      id={mockData[0].id}
      name={mockData[0].name}
      genre={mockData[0].genre}
      previewImage={mockData[0].previewImage}
      previewVideoLink={mockData[0].previewVideoLink}
      showPlayButton={false}
    /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

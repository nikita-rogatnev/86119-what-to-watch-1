import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Card from "./card";

import mockData from "../../mocks/mock-data";

Enzyme.configure({adapter: new Adapter()});

it(`Card renders correctly`, () => {
  const tree = shallow(<Card
    key={mockData[0].id}
    id={mockData[0].id}
    name={mockData[0].name}
    genre={mockData[0].genre}
    previewImage={mockData[0].previewImage}
    previewVideoLink={mockData[0].previewVideoLink}
    showPlayButton={false}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});

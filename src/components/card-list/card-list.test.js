import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import CardList from "./card-list";

import mockData from "../../mocks/mock-data";

Enzyme.configure({adapter: new Adapter()});

it(`CardList renders correctly`, () => {
  const tree = shallow(<CardList
    data={mockData}
    showPlayButton={false}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});

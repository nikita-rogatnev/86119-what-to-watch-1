import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import CardHuge from "./card-huge";

Enzyme.configure({adapter: new Adapter()});

it(`CardHuge renders correctly`, () => {
  const tree = shallow(<CardHuge/>);

  expect(toJson(tree)).toMatchSnapshot();
});

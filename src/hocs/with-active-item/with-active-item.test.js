import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import withActiveItem from "./with-active-item";

Enzyme.configure({adapter: new Adapter()});

it(`withActiveItem renders correctly`, () => {
  const tree = shallow(<withActiveItem/>);

  expect(toJson(tree)).toMatchSnapshot();
});

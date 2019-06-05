import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import NotFound from "./not-found";

Enzyme.configure({adapter: new Adapter()});

it(`NotFound renders correctly`, () => {
  const tree = shallow(<NotFound/>);

  expect(toJson(tree)).toMatchSnapshot();
});

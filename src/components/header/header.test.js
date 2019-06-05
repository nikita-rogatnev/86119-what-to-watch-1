import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Header from "./header";

jest.mock(`./header`, () => `Header`);

Enzyme.configure({adapter: new Adapter()});

it(`Header renders correctly`, () => {
  const tree = shallow(<Header/>);

  expect(toJson(tree)).toMatchSnapshot();
});

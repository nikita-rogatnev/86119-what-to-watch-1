import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import App from "./app";

Enzyme.configure({adapter: new Adapter()});

it(`App renders correctly`, () => {
  const tree = shallow(<App/>);

  expect(toJson(tree)).toMatchSnapshot();
});

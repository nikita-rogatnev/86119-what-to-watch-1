import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import SignIn from "./sign-in";

jest.mock(`../sign-in/sign-in`, () => `SignIn`);

Enzyme.configure({adapter: new Adapter()});

it(`SignIn renders correctly`, () => {
  const tree = shallow(<SignIn/>);

  expect(toJson(tree)).toMatchSnapshot();
});

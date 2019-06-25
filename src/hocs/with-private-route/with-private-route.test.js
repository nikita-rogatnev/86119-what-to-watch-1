import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import withPrivateRoute from "./with-private-route";

Enzyme.configure({adapter: new Adapter()});

it(`withPrivateRoute renders correctly`, () => {
  const tree = shallow(<withPrivateRoute/>);

  expect(toJson(tree)).toMatchSnapshot();
});

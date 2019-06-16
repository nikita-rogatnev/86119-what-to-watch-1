import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import ProgressBar from "./progress-bar";

Enzyme.configure({adapter: new Adapter()});

it(`ProgressBar renders correctly`, () => {
  const tree = shallow(<ProgressBar
    progress="10"
  />);

  expect(toJson(tree)).toMatchSnapshot();
});

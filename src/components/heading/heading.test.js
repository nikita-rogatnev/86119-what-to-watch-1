import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Heading from "./heading";

Enzyme.configure({adapter: new Adapter()});

it(`Heading renders correctly`, () => {
  const tree = shallow(<Heading
    title={`Test title`}/>);

  expect(toJson(tree)).toMatchSnapshot();
});

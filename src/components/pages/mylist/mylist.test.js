import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Mylist from "./mylist";

import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

Enzyme.configure({adapter: new Adapter()});

it(`Mylist page renders correctly`, () => {
  const tree = shallow(<Provider store={store}>
    <Mylist/>
  </Provider>);

  expect(toJson(tree)).toMatchSnapshot();
});

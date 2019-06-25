import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";

import AddReview from "./add-review";

import mockData from "../../mocks/mock-data";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

Enzyme.configure({adapter: new Adapter()});

it(`AddReview click handles`, () => {
  const mockFunc = jest.fn();
  const tree = mount(<Provider store={store}>
    <AddReview
      id={mockData[0].id}
      genre={mockData[0].genre}
      onSumbit={mockFunc()}
    />
  </Provider>);

  tree.find(`form`).simulate(`submit`);
  expect(mockFunc).toHaveBeenCalledTimes(1);
});


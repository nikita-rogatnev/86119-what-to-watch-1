import React from "react";
import renderer from "react-test-renderer";

import AddReview from "./add-review";

import mockData from "../../mocks/mock-data";

import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

it(`AddReview renders correctly`, () => {
  const tree = renderer.create(<Provider store={store}>
    <AddReview id={mockData[0].id} genre={mockData[0].genre}/>
  </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

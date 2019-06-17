import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import CardHero from "./card-hero";

import mockData from "../../mocks/mock-data";
import mockReviews from "../../mocks/mock-reviews";

import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

Enzyme.configure({adapter: new Adapter()});

it(`CardHero renders correctly`, () => {
  const tree = shallow(<Provider store={store}>
    <CardHero
      data={mockData[0]}
      reviews={mockReviews}
    />
  </Provider>);

  expect(toJson(tree)).toMatchSnapshot();
});

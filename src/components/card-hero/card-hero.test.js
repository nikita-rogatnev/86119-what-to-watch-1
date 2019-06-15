import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import CardHero from "./card-hero";

import mockData from "../../mocks/mock-data";
import mockReviews from "../../mocks/mock-reviews";

Enzyme.configure({adapter: new Adapter()});

it(`CardHero renders correctly`, () => {
  const tree = shallow(<CardHero
    data={mockData[0]}
    reviews={mockReviews}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Catalog from "./catalog";

import mockData from "../../mocks/mock-data";
import mockFilters from "../../mocks/mock-filters";

Enzyme.configure({adapter: new Adapter()});

it(`Catalog renders correctly`, () => {
  const tree = shallow(<Catalog
    data={mockData}
    filters={mockFilters}
    currentFilter={`All genres`}
    changeCurrentFilter={() => {
    }}
    showMoreButton={false}
    showPlayButton={false}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Filters from "./filters";

import mockFilters from "../../mocks/mock-filters";

Enzyme.configure({adapter: new Adapter()});

it(`Filters renders correctly`, () => {
  const tree = shallow(<Filters
    filters={mockFilters}
    currentFilter={`All genres`}
    changeCurrentFilter={() => {
    }}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});


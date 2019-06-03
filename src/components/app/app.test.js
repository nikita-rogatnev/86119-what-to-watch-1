import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

import mockData from '../../mocks/mock-data';
import mockFilters from '../../mocks/mock-filters';

jest.mock(`../header/header`, () => `Header`);

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      data={mockData}
      filters={mockFilters}
      currentFilter={`All genres`}
      changeCurrentFilter={() => {
      }}
      isAuthorizationRequired={false}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

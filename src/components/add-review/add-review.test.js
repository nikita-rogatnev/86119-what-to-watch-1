import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import AddReview from './add-review';

it(`AddReview renders correctly`, () => {
  const tree = renderer.create(<BrowserRouter><AddReview/></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";

import Card from './card';

import mockData from '../../mocks/mock-data';

Enzyme.configure({adapter: new Adapter()});

jest.useFakeTimers();

describe(`Card e2e`, () => {
  it(`Card hover handles`, () => {
    const tree = mount(<BrowserRouter>
      <Card
        id={mockData[0].id}
        name={mockData[0].name}
        previewImage={mockData[0].previewImage}
        previewVideoLink={mockData[0].previewVideoLink}
        showPlayButton={false}
      />
    </BrowserRouter>);

    expect(tree.state(`isPreviewPlaying`)).toBe(false);

    // On mouse enter
    tree.find(`article`).simulate(`mouseEnter`);
    jest.advanceTimersByTime(1000);
    expect(tree.state(`isPreviewPlaying`)).toBe(true);

    // On mouse leave
    tree.simulate(`mouseleave`);
    expect(tree.state(`isPreviewPlaying`)).toBe(false);
  });
});

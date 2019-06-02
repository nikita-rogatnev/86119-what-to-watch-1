import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './card';

Enzyme.configure({adapter: new Adapter()});

jest.useFakeTimers();

describe(`Card e2e`, () => {
  const mockData = {
    "id": 1,
    "name": `Seven Years in Tibet`,
    "previewImageSrc": `https://es31-server.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
    "previewVideoSrc": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  };

  it(`Card hover handles`, () => {
    const hoverHandler = jest.fn();

    const tree = mount(<Card
      id={mockData.id}
      name={mockData.name}
      previewVideoSrc={mockData.previewVideoSrc}
      previewImageSrc={mockData.previewImageSrc}
      onHover={hoverHandler}
    />);

    const element = tree.find(`article`);

    element.simulate(`mouseEnter`);

    jest.advanceTimersByTime(1000);
    expect(tree.state(`isPreviewPlaying`)).toBe(true);

    tree.simulate(`mouseleave`);
    expect(tree.state(`isPreviewPlaying`)).toBe(false);
  });
});

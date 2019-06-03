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
    const tree = mount(<Card
      id={mockData.id}
      name={mockData.name}
      previewImage={mockData.previewImage}
      previewVideoLink={mockData.previewVideoLink}
      showButton={false}
    />);

    // On mouse enter
    tree.find(`article`).simulate(`mouseEnter`);
    jest.advanceTimersByTime(1000);
    expect(tree.state(`isPreviewPlaying`)).toBe(true);

    // On mouse leave
    tree.simulate(`mouseleave`);
    expect(tree.state(`isPreviewPlaying`)).toBe(false);
  });
});

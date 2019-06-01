import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card';

const mockData = {
  "id": 1,
  "name": `Seven Years in Tibet`,
  "previewImageSrc": `https://es31-server.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
  "previewVideoSrc": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

Enzyme.configure({adapter: new Adapter()});

describe(`SmallMovieCard`, () => {
  const hoverHandler = jest.fn(() => mockData.id);

  it(`Card hover handles`, () => {
    const smallMovieCard = shallow(<SmallMovieCard
      id={mockData.id}
      name={mockData.name}
      previewVideoSrc={mockData.previewVideoSrc}
      previewImageSrc={mockData.previewImageSrc}
      onMouseEnter={hoverHandler}
    />);

    smallMovieCard.find(`.catalog__movies-card`).simulate(`mouseenter`);
    hoverHandler(mockData);
    expect(hoverHandler).toHaveReturnedWith(mockData.id);
  });
});

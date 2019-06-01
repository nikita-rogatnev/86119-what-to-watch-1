import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card';

import mockData from "../../mocks/mock-data";

Enzyme.configure({adapter: new Adapter()});

describe(`SmallMovieCard`, () => {
  const hoverHandler = jest.fn(() => mockData.id);

  it(`Card hover handles`, () => {
    const smallMovieCard = shallow(<SmallMovieCard
      key={mockData.id}
      name={mockData.name}
      previewVideoSrc={mockData.previewVideoSrc}
      previewImageSrc={mockData.previewImageSrc}
      onMouseEnter={hoverHandler}
    />);

    smallMovieCard.find(`.catalog__movies-card`).simulate(`mouseenter`);
    expect(hoverHandler).toHaveBeenCalled();
    hoverHandler(mockData);
    expect(hoverHandler).toHaveReturnedWith(mockData.id);
  });
});

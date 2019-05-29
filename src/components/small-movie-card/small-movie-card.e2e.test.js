import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`SmallMovieCard`, () => {
  const hoverHandler = jest.fn();

  it(`Card hover handles`, () => {
    const smallMovieCard = shallow(<SmallMovieCard
      name={`Test name`}
      teaser={`Test file`}
      link={`Test link`}
      onHover={hoverHandler}
    />);

    smallMovieCard.simulate(`mouseEnter`);

    expect(hoverHandler).toHaveBeenCalledWith(1);
  });
});

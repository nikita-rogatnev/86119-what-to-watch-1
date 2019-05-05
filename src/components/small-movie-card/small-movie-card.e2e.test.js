import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`SmallMovieCard`, () => {
  it(`Card heading link click handles`, () => {
    const clickHandler = jest.fn();

    const smallMovieCard = shallow(<SmallMovieCard
      movieName={`Test name`}
      movieLink={`http://test-link.com/`}
      onClick={clickHandler}
    />);

    const movieLink = smallMovieCard.find(`.small-movie-card__link`);
    movieLink.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

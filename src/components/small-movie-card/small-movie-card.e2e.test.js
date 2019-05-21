import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`SmallMovieCard`, () => {
  const movieLinkClickHandler = jest.fn();

  it(`Card heading link click handles`, () => {
    const smallMovieCard = shallow(<SmallMovieCard
      name={`Test name`}
      teaser={`Test file`}
      link={`Test link`}
      movieLinkClick={movieLinkClickHandler}
    />);

    const movieLink = smallMovieCard.find(`.small-movie-card__link`);

    movieLink.simulate(`click`, {
      preventDefault() {
      }
    });

    expect(movieLinkClickHandler).toHaveBeenCalledTimes(1);
  });
});

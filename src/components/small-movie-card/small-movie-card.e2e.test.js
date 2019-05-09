import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`SmallMovieCard`, () => {
  it(`Card heading link click handles`, () => {
    const movieButtonClickHandler = jest.fn();
    const movieLinkClickHandler = jest.fn();

    const smallMovieCard = shallow(<SmallMovieCard
      movieName={`Test name`}
      movieLink={`http://test-link.com/`}
      movieButtonClick={movieButtonClickHandler}
      movieLinkClick={movieLinkClickHandler}
    />);

    const movieLink = smallMovieCard.find(`.small-movie-card__link`);

    movieLink.simulate(`click`, {
      preventDefault() {
      }
    });

    expect(movieLinkClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Card play button click handles`, () => {
    const movieButtonClickHandler = jest.fn();
    const movieLinkClickHandler = jest.fn();

    const smallMovieCard = shallow(<SmallMovieCard
      movieName={`Test name`}
      movieLink={`http://test-link.com/`}
      movieButtonClick={movieButtonClickHandler}
      movieLinkClick={movieLinkClickHandler}
    />);

    const movieButton = smallMovieCard.find(`.small-movie-card__play-btn`);

    movieButton.simulate(`click`, {
      preventDefault() {
      }
    });

    expect(movieButtonClickHandler).toHaveBeenCalledTimes(1);
  });
});

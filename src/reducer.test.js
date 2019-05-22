import {ActionCreator} from './reducer';

import moviesList from './mocks/movies';

describe(`Action creators work correctly`, () => {
  const ALL_GENRES = `All genres`;

  it(`Action creator for genre change returns correct action`, () => {
    expect(ActionCreator.changeGenre(`comedies`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `comedies`,
    });
  });

  it(`Action creator for genre based movie filtering returns correct movie array when genre is chosen`, () => {
    expect(ActionCreator.getMovies(`comedies`, moviesList));
  });

  it(`Action creator for genre based movie filtering returns array of all movies when genre is defaulted to all genres`, () => {
    expect(ActionCreator.getMovies(ALL_GENRES, moviesList));
  });
});

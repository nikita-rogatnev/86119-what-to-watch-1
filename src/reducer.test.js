import {ActionCreator} from './reducer';

import moviesList from './mocks/movies';

describe(`Action creators work correctly`, () => {
  it(`Genre change returns correct action`, () => {
    expect(ActionCreator.changeGenre(`comedies`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `comedies`,
    });
  });

  it(`Filtering returns correct movie array`, () => {
    expect(ActionCreator.getMovies(`comedies`, moviesList));
  });

  it(`Filtering returns array of all movies when genre is defaulted`, () => {
    expect(ActionCreator.getMovies(`All genres`, moviesList));
  });
});

import {ActionCreator} from './reducer';

import moviesList from './mocks/movies';

describe(`Action creators work correctly`, () => {
  it(`Genre change returns correct action`, () => {
    expect(ActionCreator.filterMovies(`comedies`)).toEqual({
      type: `FILTER_MOVIES`,
      payload: `comedies`,
    });
  });

  it(`Filtering returns correct movie array`, () => {
    expect(ActionCreator.filterMovies(`comedies`, moviesList));
  });

  it(`Filtering returns array of all movies when genre is defaulted`, () => {
    expect(ActionCreator.filterMovies(`All genres`, moviesList));
  });
});

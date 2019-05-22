import moviesList from './mocks/movies';

let genresList = Array.from(new Set(moviesList.map(({genre}) => genre)));
genresList.unshift(`All genres`);

const initialState = {
  allGenres: genresList,
  movies: moviesList,
  activeGenre: `All genres`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: `CHANGE_GENRE`,
    payload: genre,
  }),

  getMovies: (activeGenre, movies) => {
    if (activeGenre === `All genres`) {
      return {
        type: `ALL_MOVIES`,
        payload: movies,
      };
    }

    return {
      type: `SORT_MOVIES`,
      payload: moviesList.filter((movie) => movie.genre === activeGenre),
    };
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });
    case `SORT_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload,
      });
    case `ALL_MOVIES`:
      return initialState;
  }

  return state;
};

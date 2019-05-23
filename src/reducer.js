import moviesList from './mocks/movies';

let genresList = Array.from(new Set(moviesList.map(({genre}) => genre)));
genresList.unshift(`All genres`);

const initialState = {
  allGenres: genresList,
  movies: moviesList,
  activeGenre: `All genres`,
};

export const ActionCreator = {
  filterMovies: (activeGenre) => ({
    type: `FILTER_MOVIES`,
    payload: activeGenre
  })
};

export const reducer = (state = initialState, action) => {
  if (action.payload) {
    return Object.assign({}, state, {
      activeGenre: action.payload,
      movies: action.payload === `All genres` ? moviesList : moviesList.filter((movie) => movie.genre === action.payload)
    });
  }

  return initialState;
};

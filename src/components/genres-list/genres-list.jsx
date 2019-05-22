import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {movies, activeGenre, onChangeGenre} = props;

  let genres = Array.from(new Set(movies.map(({genre}) => genre)));
  genres.unshift(`All genres`);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`} key={genre}>
            <a className="catalog__genres-link" onClick={() => onChangeGenre(genre)}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  movies: PropTypes.array.isRequired,
  activeGenre: PropTypes.string,
  onChangeGenre: PropTypes.func.isRequired,
};

export default GenresList;

import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {
    allGenres,
    activeGenre,
    onActiveGenreChange
  } = props;

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => {
        return (
          <li className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`} key={genre}>
            <a className="catalog__genres-link" onClick={() => onActiveGenreChange(genre)}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string,
  onActiveGenreChange: PropTypes.func.isRequired,
};

export default GenresList;

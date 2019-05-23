import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {allGenres, activeGenre, onChangeGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => {
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
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string,
  onChangeGenre: PropTypes.func.isRequired,
};

export default GenresList;

import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {
    filters,
    currentFilter,
    changeCurrentFilter
  } = props;

  return (
    <ul className="catalog__genres-list">
      {filters.map((genre) => {
        return (
          <li className={`catalog__genres-item ${genre === currentFilter ? `catalog__genres-item--active` : ``}`} key={genre}>
            <a className="catalog__genres-link" onClick={() => changeCurrentFilter(genre)}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

export default GenresList;

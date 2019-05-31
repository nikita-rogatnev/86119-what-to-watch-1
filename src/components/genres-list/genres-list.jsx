import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {filters} = props;

  return (
    <ul className="catalog__genres-list">
      {filters.map((genre) => {
        return (
          <li className={`catalog__genres-item`} key={genre}>
            <a className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default GenresList;

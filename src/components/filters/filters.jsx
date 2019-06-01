import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const {
    filters,
    currentFilter,
    changeCurrentFilter,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {filters.map((filter) => {
        return (
          <li className={`catalog__genres-item ${filter === currentFilter ? `catalog__genres-item--active` : ``}`} key={filter}>
            <a className="catalog__genres-link" onClick={() => changeCurrentFilter(filter)}>{filter}</a>
          </li>
        );
      })}
    </ul>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

export default Filters;

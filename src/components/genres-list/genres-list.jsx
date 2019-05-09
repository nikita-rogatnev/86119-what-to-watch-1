import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GenresList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {genres} = this.props;

    return (
      <ul className="catalog__genres-list">
        {genres.map((item) => (
          <li key={item.title} className={`catalog__genres-item ${item.isActive ? `catalog__genres-item--active` : ``}`}>
            <a href="#" className="catalog__genres-link">{item.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenresList;

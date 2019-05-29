import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends PureComponent {
  render() {
    const {
      movies,
      onChange
    } = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((item) =>
          <SmallMovieCard
            key={item.id}
            onHover={onChange}
            {...item}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MoviesList;

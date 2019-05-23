import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends PureComponent {
  movieLinkClick() {
    event.preventDefault();
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((item) =>
          <SmallMovieCard
            key={item.id}
            movieLinkClick={this.movieLinkClick}
            {...item}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;

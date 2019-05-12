import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends PureComponent {
  movieButtonClick() {
    event.preventDefault();
  }

  movieLinkClick() {
    event.preventDefault();
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((item) =>
          <SmallMovieCard
            key={item.id}
            movieName={item.name}
            movieLink={item.link}
            movieButtonClick={this.movieButtonClick}
            movieLinkClick={this.movieLinkClick}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;

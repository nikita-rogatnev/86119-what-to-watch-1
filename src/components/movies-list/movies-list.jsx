import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    const movieButtonClick = () => {
      event.preventDefault();
    };

    const movieLinkClick = () => {
      event.preventDefault();
    };

    return (
      <div className="catalog__movies-list">
        {films.map((item) =>
          <SmallMovieCard
            key={item.id}
            movieName={item.name}
            movieLink={item.link}
            movieButtonClick={movieButtonClick}
            movieLinkClick={movieLinkClick}
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

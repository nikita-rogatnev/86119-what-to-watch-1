import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

export class MoviesList extends PureComponent {
  render() {
    const {data} = this.props;

    return (
      <div className="catalog__movies-list">
        {data.map((item) =>
          <SmallMovieCard
            key={item.id}
            {...item}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MoviesList;


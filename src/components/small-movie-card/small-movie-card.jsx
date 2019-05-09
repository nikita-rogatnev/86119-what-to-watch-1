import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SmallMovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieName, movieLink, movieLinkClick} = this.props;

    const convertedMovieName = movieName
      .replace(/\s+/g, `-`)
      .replace(/:/g, ``)
      .toLowerCase() + `.jpg`;

    return (
      <article className="small-movie-card catalog__movies-card">
        <button className="small-movie-card__play-btn" type="button">Play</button>
        <div className="small-movie-card__image">
          <img src={`img/${convertedMovieName}`} alt={movieName} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" onClick={movieLinkClick} href={movieLink}>{movieName}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieLink: PropTypes.string.isRequired,
  movieLinkClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;

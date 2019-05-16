import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player';

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timeoutId = null;
    this._onHoverEnter = this._onHoverEnter.bind(this);
    this._onHoverLeave = this._onHoverLeave.bind(this);

    this.state = {
      isPreviewPlaying: false,
    };
  }

  _onHoverEnter() {
    this.timeoutId = setTimeout(() => {
      this.setState({isPreviewPlaying: true});
    }, 1000);
  }

  _onHoverLeave() {
    clearTimeout(this.timeoutId);
    this.setState({isPreviewPlaying: false});
  }

  render() {
    const {
      movieName,
      movieFile,
      movieLink,
      movieLinkClick
    } = this.props;

    const {isPreviewPlaying} = this.state;

    const convertedMovieName = movieName
      .replace(/\s+/g, `-`)
      .replace(/:/g, ``)
      .toLowerCase() + `.jpg`;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._onHoverEnter} onMouseLeave={this._onHoverLeave}>
        <div className="small-movie-card__image">
          {
            isPreviewPlaying
              ? <VideoPlayer
                src={movieFile}
                poster={`img/${convertedMovieName}`}
                muted={true}
                autoPlay={true}
                controls={false}
              />
              :
              <img
                src={`img/${convertedMovieName}`}
                alt={movieName}
                width="280"
                height="175"/>
          }
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
  movieFile: PropTypes.string.isRequired,
  movieLink: PropTypes.string.isRequired,
  movieLinkClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;

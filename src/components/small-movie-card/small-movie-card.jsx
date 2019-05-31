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
      name,
      previewVideoSrc,
      previewImageSrc,
    } = this.props;

    const {isPreviewPlaying} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._onHoverEnter} onMouseLeave={this._onHoverLeave}>
        <div className="small-movie-card__image">
          {
            isPreviewPlaying ? <VideoPlayer
              src={previewVideoSrc}
              poster={previewImageSrc}
              muted={true}
              autoPlay={true}
              controls={false}
            /> :
              <img
                src={previewImageSrc}
                alt={name}
                width="280"
                height="175"/>
          }
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href='#'>{name}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImageSrc: PropTypes.string.isRequired,
  previewVideoSrc: PropTypes.string.isRequired,
};

export default SmallMovieCard;

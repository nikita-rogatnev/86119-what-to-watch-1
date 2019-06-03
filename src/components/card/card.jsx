import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player';
import {Link} from "react-router-dom";

class Card extends React.PureComponent {
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
      id,
      name,
      previewImage,
      previewVideoLink,
      showButton,
    } = this.props;

    const {isPreviewPlaying} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._onHoverEnter} onMouseLeave={this._onHoverLeave}>
        {showButton ? <button className="small-movie-card__play-btn" type="button">Play</button> : ``}
        <div className="small-movie-card__image">
          {
            isPreviewPlaying ? <VideoPlayer
              previewVideoLink={previewVideoLink}
              previewImage={previewImage}
              muted={true}
              autoPlay={true}
              controls={false}
            /> :
              <img
                src={previewImage}
                alt={name}
                width="280"
                height="175"/>
          }
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${id}`} className="small-movie-card__link">
            {name}
          </Link>
        </h3>
      </article>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.array,
  runTime: PropTypes.number,
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool,
  showButton: PropTypes.bool.isRequired,
};

export default Card;

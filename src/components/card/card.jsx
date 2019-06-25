import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import VideoPreview from "../video-preview/video-preview";

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
      showPlayButton,
      genre,
    } = this.props;

    const {isPreviewPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._onHoverEnter}
        onMouseLeave={this._onHoverLeave}>

        {showPlayButton &&
        <Link to={{
          pathname: `/film/${id}`,
          state: {
            currentDataItemId: id,
            currentDataFilter: genre,
          },
        }} className="small-movie-card__play-btn">
          Play
        </Link>}

        {isPreviewPlaying ?
          <div className="small-movie-card__image">
            <VideoPreview
              previewVideoLink={previewVideoLink}
              previewImage={previewImage}
              muted={true}
              autoPlay={true}
              controls={false}
            />
          </div>
          :
          <React.Fragment>
            {showPlayButton ?
              <Link to={{
                pathname: `/film/${id}`,
                state: {
                  currentDataItemId: id,
                  currentDataFilter: genre,
                },
              }} className="small-movie-card__image">
                <img
                  src={previewImage}
                  alt={name}
                  width="280"
                  height="175"/>
              </Link>
              :
              <div className="small-movie-card__image">
                <img
                  src={previewImage}
                  alt={name}
                  width="280"
                  height="175"/>
              </div>
            }
          </React.Fragment>
        }
        <h3 className="small-movie-card__title">
          <Link to={{
            pathname: `/film/${id}`,
            state: {
              currentDataItemId: id,
              currentDataFilter: genre,
            },
          }} className="small-movie-card__link">
            {name}
          </Link>
        </h3>
      </article>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  showPlayButton: PropTypes.bool.isRequired,
};

export default Card;

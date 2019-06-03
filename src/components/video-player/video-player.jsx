import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    const {
      previewImage,
      previewVideoLink,
      muted,
      autoPlay,
      controls
    } = this.props;

    return (
      <React.Fragment>
        <video
          poster={previewImage}
          muted={muted}
          autoPlay={autoPlay}
          controls={controls}
          width="280"
          height="180"
          ref={this._videoRef}
        >
          <source src={previewVideoLink} type='video/mp4'/>
        </video>
      </React.Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool
};

export default VideoPlayer;

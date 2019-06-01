import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    const {
      previewImageSrc,
      previewVideoSrc,
      muted,
      autoPlay,
      controls
    } = this.props;

    return (
      <React.Fragment>
        <video
          poster={previewImageSrc}
          muted={muted}
          autoPlay={autoPlay}
          controls={controls}
          width="280"
          height="180"
          ref={this._videoRef}
        >
          <source src={previewVideoSrc} type='video/mp4'/>
        </video>
      </React.Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  previewVideoSrc: PropTypes.string.isRequired,
  previewImageSrc: PropTypes.string,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool
};

export default VideoPlayer;

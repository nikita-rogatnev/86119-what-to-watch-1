import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.onplay = null;
    video.onpause = null;
    video.src = ``;
  }

  render() {
    const {
      poster,
      src,
      muted,
      autoPlay,
      controls
    } = this.props;

    return (
      <React.Fragment>
        <video
          poster={poster}
          muted={muted}
          autoPlay={autoPlay}
          controls={controls}
          width="280"
          height="180"
          ref={this._videoRef}
        >
          <source src={src} type='video/mp4'/>
        </video>
      </React.Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool
};

export default VideoPlayer;

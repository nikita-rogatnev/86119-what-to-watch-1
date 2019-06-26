import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {dataItemShape} from "../../models";

import ProgressBar from "../progress-bar/progress-bar";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    this._onToggleVideo = this._onToggleVideo.bind(this);
    this._onChangeCurrentTime = this._onChangeCurrentTime.bind(this);

    this.state = {
      isVideoPlaying: false,
      progress: 0,
    };
  }

  componentWillUnmount() {
    clearInterval(this.videoInterval);
    const video = this.videoRef.current;

    video.pause();
    this.setState({isVideoPlaying: false, progress: 0});
  }

  _onToggleVideo() {
    const video = this.videoRef.current;

    if (video.paused) {
      video.play();
      this.setState({isVideoPlaying: true});

      this.videoInterval = setInterval(() => {
        this.setState({
          progress: parseInt((video.currentTime / video.duration * 100).toFixed(1), 10),
        });
      }, 100);
    } else {
      video.pause();
      this.setState({isVideoPlaying: false});
    }
  }

  _onChangeCurrentTime(progress) {
    const video = this.videoRef.current;

    this.setState({progress});
    video.currentTime = progress * video.duration;
  }

  _handleFullScreen() {
    const video = this.videoRef.current;

    video.requestFullscreen();
  }

  render() {
    const {data} = this.props.location.state;

    const {
      backgroundImage,
      videoLink,
      runTime,
    } = data;

    return (
      <div className="player">
        <video
          className="player__video"
          poster={backgroundImage}
          muted={false}
          autoPlay={false}
          controls={false}
          ref={this.videoRef}
          onLoad={this._onLoad}
        >
          <source src={videoLink} type="video/mp4"/>
        </video>

        <button type="button" className="player__exit" onClick={() => this.props.history.goBack()}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">

              <ProgressBar
                moveCurrentTime={this._onChangeCurrentTime}
                progress={this.state.progress}
              />

              <div className="player__toggler" style={{left: this.state.progress + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">
              {new Date(runTime * 60 * 1000).toISOString().substr(11, 8)}
            </div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this._onToggleVideo.bind(this)}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                {this.state.isVideoPlaying ? <use xlinkHref="#pause"/> : <use xlinkHref="#play-s"/>}
              </svg>
              <span>Play</span>
            </button>

            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={this._handleFullScreen.bind(this)}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"/>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  backgroundImage: PropTypes.string,
  videoLink: PropTypes.string,
  runTime: PropTypes.string,
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: dataItemShape,
    }),
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }),
};

export default withRouter(VideoPlayer);

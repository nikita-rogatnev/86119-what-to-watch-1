import React from "react";
import PropTypes from "prop-types";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  _onClick(event) {
    const nodeBar = event.currentTarget;
    const progress = (event.clientX - nodeBar.getBoundingClientRect().left) / nodeBar.offsetWidth;

    this.props.moveCurrentTime(progress);
  }

  render() {
    const {progress} = this.props;

    return (
      <progress
        className="player__progress"
        value={progress}
        max="100"
        onClick={this._onClick}/>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  moveCurrentTime: PropTypes.func,
};

export default ProgressBar;

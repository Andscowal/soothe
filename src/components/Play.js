import React, { Component } from "react";

export default class Play extends Component {
  render() {
    if (this.props.play === false) {
      return (
        <div className="play">
          <i className="fas fa-play" onClick={this.props.startTimer} />
        </div>
      );
    } else {
      return (
        <div className="play">
          <i className="fas fa-pause" onClick={this.props.pauseTimer} />
        </div>
      );
    }
  }
}

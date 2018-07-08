import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="close">
          <i className="fas fa-times" onClick={this.props.infoClick} />
        </div>
        <h1>Welcome to Soothe</h1>
        <h3>Here, we practice the "4-7-8" Deep Breathing Technique.</h3>
        <p>Inhale for 4 seconds.</p>
        <p>Hold for 7 seconds.</p>
        <p>Exhale for 8 seconds.</p>
        <p>Each cycle should take nearly 20 seconds, repeat for 3 cycles.</p>
        <p>Your exercise is complete after 1 minute.</p>
        <h3>Buttons:</h3>
        <p>
          <i className="fas fa-play" /> Start Timer
        </p>
        <p>
          <i className="fas fa-pause" /> Pause Timer
        </p>
      </div>
    );
  }
}

export default Info;

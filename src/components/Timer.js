import React, { Component } from "react";
import Play from "./Play";

class Timer extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 60, play: false };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0 || this.state.play === false) {
      this.timer = setInterval(this.countDown, 1000);
      let newState = this.state.play === false ? true : false;
      this.setState({ play: newState });
    }
  }

  pauseTimer() {
    if (this.timer !== 0 || this.state.play === true) {
      clearInterval(this.timer);
      let newState = this.state.play === false ? true : false;
      this.setState({ play: newState });
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }
  render() {
    if (this.state.play === false) {
      return (
        <div className="timer">
          <h1>Welcome to Soothe</h1>
          <svg width="17em" height="17em">
            <g>
              <circle
                className="pulse"
                cx="8.5em"
                cy="8.5em"
                r="5.8em"
                fill="none"
                stroke="#FFF"
                strokeWidth=".05em"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                stroke="#fff"
                dy="0.3em"
              >
                M:{this.state.time.m} S:{this.state.time.s}
              </text>
            </g>
          </svg>
          <Play
            play={this.state.play}
            startTimer={this.startTimer.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div className="timer">
          <h1>Welcome to Soothe</h1>
          <svg width="17em" height="17em">
            <g>
              <circle
                className="pulse"
                cx="8.5em"
                cy="8.5em"
                r="5.8em"
                fill="none"
                stroke="#FFF"
                strokeWidth=".05em"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                stroke="#fff"
                dy="0.3em"
              >
                M:{this.state.time.m} S:{this.state.time.s}
              </text>
            </g>
          </svg>
          <Play
            play={this.state.play}
            pauseTimer={this.pauseTimer.bind(this)}
          />
        </div>
      );
    }
  }
}

export default Timer;

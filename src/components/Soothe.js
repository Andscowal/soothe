import React, { Component } from "react";
import Info from "./Info";
import Timer from "./Timer";

class Soothe extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.infoClick = this.infoClick.bind(this);
  }

  infoClick = () => {
    let newState = this.state.visible === false ? true : false;
    this.setState({ visible: newState });
  };

  render() {
    if (this.state.visible === false) {
      return (
        <div className="container">
          <div className="info">
            <i className="fas fa-info-circle" onClick={this.infoClick} />
          </div>
          <Timer timerClick={this.timerClick} play={this.state.play} />
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="info">
            <i className="fas fa-info-circle" onClick={this.infoClick} />
          </div>
          <Info infoClick={this.infoClick.bind(this)} />
        </div>
      );
    }
  }
}

export default Soothe;

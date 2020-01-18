import React from "react";

export class ClockTime extends React.Component {
  state = {
    time: new Date()
  };

  currentTime() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

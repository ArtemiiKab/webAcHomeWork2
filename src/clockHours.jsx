import React from "react";

export class ClockHours extends React.Component {
  time = new Date();
  dateString;
  state = {
    time: this.time,
    h: this.time.getHours(),
    m: this.time.getMinutes(),
    s: this.time.getSeconds()
  };

  currentTime() {
    this.time = new Date();
    this.setState({
      time: new Date(),
      h: this.time.getHours(),
      m: this.time.getMinutes(),
      s: this.time.getSeconds()
    });
  }

  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <div>
        {"Hours: " +
          this.state.h +
          " Minutes: " +
          this.state.m +
          " Seconds: " +
          this.state.s}
      </div>
    );
  }
}

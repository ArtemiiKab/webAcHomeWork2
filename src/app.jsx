import React from "react";
import "./app.css";
import { ClockTime } from "./clockTime";
import { ClockDate } from "./clockDate";
import { ClockHours } from "./clockHours";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      backgroundColor: "#fccd45",
      clockType: <ClockTime />
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      backgroundColor: this.randomColor(),
      clockType: this.randomClock()
    });
  }

  colors = ["#75cace", "#75ce8d", "#d4cd6a"];
  choice = 0;
  color = 0;
  randomClock() {
    if (this.choice < 2) {
      this.choice++;
    } else {
      this.choice = 0;
    }

    switch (this.choice) {
      case 0:
        return <ClockTime />;

      case 1:
        return <ClockDate />;
      case 2:
        return <ClockHours />;
    }
  }
  randomColor() {
    if (this.color < 2) {
      this.color++;
    } else {
      this.color = 0;
    }

    return this.colors[this.color];
  }

  render() {
    return (
      <div
        className="header"
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h1 className="clock">{this.state.clockType}</h1>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    time: 0,
    active: false
  };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval); //if active is false, clear interval
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000); //if active is true, callback interval and callback addSecond function and assign to a variable
    }
    this.setState({
      active: !this.state.active //call setState and set active on true
    });
  };

  addSecond = () => {
    this.setState({
      time: this.state.time + 1
    });
  };

  render() {
    return (
      <>
        <p>{this.state.time}</p>
        <SwitchButton click={this.handleClick} active={this.state.active} />
      </>
    );
  }
}

export default App;

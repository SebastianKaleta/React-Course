import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="user">
            {" "}
            Twoje imię:
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;

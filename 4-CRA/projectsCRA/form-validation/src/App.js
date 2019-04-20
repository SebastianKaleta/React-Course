import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: ""
  };

  handleChange = e => {
    console.log(e.target.type);
    console.log(e.target.name);

    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="user">
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            Twoje adres email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          {/* <label htmlFor="user">
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label> */}
        </form>
      </div>
    );
  }
}

export default App;

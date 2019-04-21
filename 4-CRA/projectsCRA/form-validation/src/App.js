import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,

    errors: {
      username: true,
      email: false,
      pass: false,
      accept: false
    }
  };

  messages = {
    username_incorect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorect: "Niepoprawny email",
    password_incorect: "Hasło musi mieć 8 znaków",
    accept_incorect: "Nie wyrażona zgoda"
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && (
              <span>{this.messages.username_incorect}</span>
            )}
          </label>

          <label htmlFor="email">
            Twoje email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Twoje hasło:
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Wyrażam wszelką zgodę
          </label>

          <button>Zapisz się</button>
        </form>
      </div>
    );
  }
}

export default App;

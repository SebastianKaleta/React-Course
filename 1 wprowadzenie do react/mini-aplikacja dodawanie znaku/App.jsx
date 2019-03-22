// przycisk - po kliknięciu dodawana jest litera do tekstu

// class App extends React.Component {

//   state = {
//     text: ""
//   };
//pierwszy sposób wykonania z funkcją strzałkową

//   handleClick = () => {
//     const letter = "a";

//     this.setState({
//       text: this.state.text + letter
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick}>Dodaj "A"</button>
//         <h1>{this.state.text}</h1>
//       </>
//     );
//   }
// }

//drugi sposób wykonania , z bind

//   handleClick() {
//     const letter = "a";

//     this.setState(() => ({
//       text: this.state.text + letter
//     }));
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
//         <h1>{this.state.text}</h1>
//       </>
//     );
//   }
// }

// trzeci sposób z kostruktorem
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  // state = {
  //   text: ""
  // };

  handleClick() {
    const letter = "a";

    this.setState(() => ({
      text: this.state.text + letter
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

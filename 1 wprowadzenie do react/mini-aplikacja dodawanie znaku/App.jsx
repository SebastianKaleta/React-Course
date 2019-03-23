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
    this.handleClick = this.handleClick.bind(this);
  }
  // state = {
  //   text: ""
  // };

  handleClick() {
    const number = Math.floor(Math.random() * 10);

    this.setState(() => ({
      text: this.state.text + number
    }));
  }

  render() {
    const btnName = "stwórz liczbę";
    return (
      <>
        <button onClick={this.handleClick}>{btnName}</button>
        <PanelResult text={this.state.text} />
      </>
    );
  }
}

const PanelResult = props => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(
  <App btnTitle="Dodaj cyfrę" />,
  document.getElementById("root")
);

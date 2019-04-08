class Clicker extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    number3: 0
  };
  handleClick1 = () => {
    this.setState({
      number1: this.state.number1 + 1 //wykona się na w render
    });
    console.log("z handlera:" + this.state.number1); //wciąż jest 0
  };

  handleClick2 = () => {
    this.setState({
      number2: this.state.number2 + 1
    });
    this.setState({
      number2: this.state.number2 + 1
    });
    this.setState({
      number2: this.state.number2 + 1
    });
    console.log("z handlera 2:" + this.state.number2); //wciąż jest 0
  };

  handleClick3 = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        number3: prevState.number3 + 1
      };
    });
    this.setState(prevState => {
      console.log(prevState);
      return {
        number3: prevState.number3 + 1
      };
    });
    this.setState(prevState => {
      console.log(prevState);
      return {
        number3: prevState.number3 + 1
      };
    });
  };

  render() {
    // console.log("z render:" + this.state.number1); //tu juz 1
    return (
      <div>
        <button onClick={this.handleClick1}>Podbij o 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.handleClick2}>Podbij o 3</button>
        <h1>{this.state.number2}</h1>
        <button onClick={this.handleClick3}>Podbij o 3</button>
        <h1>{this.state.number3}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Clicker />, document.getElementById("root"));

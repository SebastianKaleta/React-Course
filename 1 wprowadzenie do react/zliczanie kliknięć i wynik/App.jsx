class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result
  };

  handleMathClick = (type, number = 1) => {
    // debugger;
    if (type === "subtraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }));
    } else if (type === "reset") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: this.props.result
      }));
    } else if (type === "addition") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }));
    }
  };

  render() {
    return (
      <>
        {/* <button onClick={this.handleMathClick.bind(this, "subtraction", 10)}>
          -10
        </button>
        <button onClick={() => this.handleMathClick("subtraction")}>-1</button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>
          Reset
        </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 1)}>
          +1
        </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 10)}>
          +10
        </button> */}
        <MathButton
          name="-10"
          number="10"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton name="Reset" type="reset" click={this.handleMathClick} />
        <MathButton
          name="+1"
          number="1"
          type="addition"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const MathButton = props => {
  const number = parseInt(props.number);

  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = props => {
  return (
    <>
      <h1>
        Liczba kliknięć:{props.count}{" "}
        {props.count > 10 ? <span>. Przeciążenie procesora!</span> : null}
      </h1>
      <h1>Wynik:{props.result} </h1>
    </>
  );
};

const startValue = 0;

ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);

class App extends React.Component {
  state = { status: true };

  componentDidMount() {
    console.log("aplikacja zamontowana");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Aplikacja zaktualizowana");
  }
  render() {
    console.log("renderowanie aplikacji");
    return (
      <div>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          Przełącz
        </button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </div>
    );
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    console.log("===Child1 zamontowana===");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("===Child1 zaktualizowana===");
  }

  render() {
    console.log("===renderowanie Child1===");
    return <div>{String(this.props.status)}</div>;
  }
}
class Child2 extends React.Component {
  componentDidMount() {
    console.log("+++Child2 zamontowana+++");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("+++Child2 zaktualizowana+++");
  }
  componentWillUnmount() {
    console.log("+++Child2 odmontowany+++");
  }

  render() {
    console.log("+++renderowanie Child2+++");
    return <div>Komponent Child2 zamontowany</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

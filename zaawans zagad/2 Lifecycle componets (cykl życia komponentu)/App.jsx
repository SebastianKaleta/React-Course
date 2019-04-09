class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    console.log("1.Wywołany constructor. Wywołuje się pierwszy w cyklu życia.");
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log(
      "2.Wywołana componentWillMount - depreacaten in React v17. Wywołany jest jako następny - komponent bedzie zaontowany"
    );
  }
  componentDidMount() {
    console.log(
      "4.Wywołana componentDidMount. Wywołu się na samym końcu, po render. Komponent został zamontowany."
    );
    this.setState({
      number: 1
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "3.Wywołana componentDidUpdate. Tzw re-renderowanie komponentu, aktualizacja zmian. Wywołuje się po zmianach, wiele razy, w przeciwieństwie do reszty, które wywołują się po jednym razie "
    );
  }
  render() {
    console.log(
      "2a.Wywołana metoda render. Wywołuje się i montuje komponent (DOM)"
    );
    return (
      <div>
        <p>lifecycle - montowanie komoponentu</p>
        <Child />
      </div>
    );
  }
}

class Child extends React.Component {
  componentDidMount() {
    console.log("Wywołana componentDidMount w komponencie Child");
    // this.setState({
    //   number: 1
    // });
  }
  render() {
    console.log(`-------------------------------------
    Wywołana metoda render w komponencie Child `);
    return <h1>Dziecko</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

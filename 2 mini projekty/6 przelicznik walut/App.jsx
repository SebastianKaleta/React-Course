const Cash = props => {
  return (
    <div>
      {props.title}
      {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: ""
    // ratioDollar: 3.6,
    // ratioEuro: 4.2
  };

  currences = [
    { id: 1, name: "dollar", ratio: 3.6, title: "Wartość w dolarach:" },
    { id: 2, name: "euro", ratio: 4.2, title: "Wartość w euro:" },
    { id: 3, name: "pound", ratio: 4.55, title: "Wartość w funtach:" }
  ];

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    const { amount } = this.state; //destrukturyzacja

    const calculators = this.currences.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));

    return (
      <div className="app">
        <label>
          <input
            type="nunmber"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));

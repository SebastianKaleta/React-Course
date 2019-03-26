const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
    } else {
      return (
        <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
      );
    }
  } else {
    return null;
  }
};

const ValidationMessage = props => <p>{props.txt}</p>;

const OrderForm = props => {
  const { submit, change, isConfirmed } = props;
  return (
    <form onSubmit={props.submit}>
      <input
        type="checkbox"
        id="age"
        onChange={props.change}
        checked={props.isConfirmed}
      />
      <label htmlFor="age">Mam co najmniej 16lat</label>
      <br />
      <button>Kup bilet</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxCheck = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted)
      this.setState({
        isFormSubmitted: true
      });
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state; //destrukturyzacja

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          change={this.handleCheckboxCheck}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));

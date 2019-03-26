const PositivMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativMessage = () => (
  <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
);

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

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositivMessage />;
      } else {
        return <NegativMessage />;
      }
    } else {
      return null;
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted)
      this.setState({
        isFormSubmitted: true
      });
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxCheck}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));

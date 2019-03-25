const PositivMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativMessage = () => (
  <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
);

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false
  };

  handleCheckboxCheck = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    });
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxCheck}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmniej 16lat</label>
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));

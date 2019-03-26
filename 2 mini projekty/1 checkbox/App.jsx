// const PositivMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativMessage = () => (
//   <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
// );

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

  // displayMessage = () => {
  //   if (this.state.isFormSubmitted) {
  //     if (this.state.isConfirmed) {
  //       return (
  //         <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />
  //       );
  //     } else {
  //       return (
  //         <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
  //       );
  //     }
  //   } else {
  //     return null;
  //   }
  // };

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
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxCheck}
            checked={isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));

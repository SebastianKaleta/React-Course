class Draw extends React.Component {
  state = {
    options: ["pierwsza wróżba", "druga wróżba", "trzecia"],
    option: null,
    value: ""
  };

  handleShowOption = props => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index]
    });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleAddOption = () => {
    if (this.state.value === "") return alert("wpisz coś!");
    const options = [...this.state.options];
    options.push(this.state.value);
    //const options =this.state.options.concat(this.state.value)
    this.setState({
      options,
      value: ""
    });
    alert(`Wróżba dodana. Aktualne wróżby: ${options}`);
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleShowOption}>Zobacz wróżbę</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Dodaj wróżbę</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </React.Fragment>
    );
  }
}
ReactDOM.render(<Draw />, document.getElementById("root"));

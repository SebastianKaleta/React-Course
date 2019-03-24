class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    debugger;
    this.setState({
      messageIsActive: !this.state.messageIsActive
    });
  }

  render() {
    const text =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, magnam laudantium! Commodi doloremque vero tempora, aliquam eius saepe totam incidunt nisi fugit nostrum, inventore esse optio debitis est voluptatibus magni?";

    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaz"}
        </button>
        {/* {this.state.messageIsActive ? <p>{text}</p>:null } */}
        {this.state.messageIsActive && <p>{text}</p>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));

{
  /* <p>{this.state.messageIsActive && text}</p> */
}

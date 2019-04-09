class App extends React.Component {
  state = {
    active: true
  };

  handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  render() {
    return (
      <div>
        <SwitchButton active={this.state.active} onClick={this.handleClick} />
        {this.state.active && <Clock />}
      </div>
    );
  }
}

const SwitchButton = props => (
  <button onClick={props.onClick}>{props.active ? "Wyłącz" : "Włącz"}</button>
);

class Clock extends React.Component {
  interval = "";

  state = {
    time: this.getTime()
  };

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    };
  }

  setTime = () => {
    const time = this.getTime();
    this.setState({ time });
  };

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000); //tzreba by dać tu .bind(this), jesli w setTime nie byłoby arrow function

    //setInterval(()=>this.setTime(), 1000); lub tak pozostawiając funkcje nazwana
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {hours > 9 ? hours : `0${hours}`}:
        {minutes > 9 ? minutes : `0${minutes}`}:
        {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

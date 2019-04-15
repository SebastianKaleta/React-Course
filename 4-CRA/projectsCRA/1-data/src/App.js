import React, { Component } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "Wiadomość numer 1",
    body: "zawartość wiadomości numer 1 ..."
  },
  {
    id: 2,
    title: "Wiadomość numer 2",
    body: "zawartość wiadomości numer 2 ..."
  }
];
//pseudorosnąca baza danych
setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `zawartość wiadomości numer ${index} ...`
  });
}, 5000);

class App extends Component {
  state = {
    comments: [...data]
  };

  //odpytywanie bazy- data i ustawienie nowej tablicy, zaktualizowanej w index
  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data]
      });
    } else {
      console.log("dane takie same-nie aktualizuje");
    }
  };
  //wywołuje się raz po renderze, i co 1s wywołuje funkcje zmieniającą tablice- aktualizując dane które są produkowane w interval
  componentDidMount() {
    this.idInterval = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      //pracujemy na comment oraz id,title,body z tablicy data
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    return (
      <div className="App">
        <div>{comments.reverse()}</div>
      </div>
    );
  }
}

export default App;

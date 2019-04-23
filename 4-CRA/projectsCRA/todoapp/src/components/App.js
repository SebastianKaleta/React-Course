import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "zrobić dobry uczynek",
        date: "2018-02-11",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "pomalować dom",
        date: "2019-01-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "zrcucić 30 kilogramów",
        date: "2018-09-20",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "iść na spacer",
        date: "2019-04-20",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "opłacić raty",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: "wybrać się w góry!!",
        date: "2019-05-01",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: "przeczytać książkę",
        date: "2019-03-18",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 8,
        text: "wybrać się na rowery",
        date: "2019-05-03",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 9,
        text: "Iść do okulisty",
        date: "2019-05-06",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {};

  changeTaskStatus = id => {};
  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;

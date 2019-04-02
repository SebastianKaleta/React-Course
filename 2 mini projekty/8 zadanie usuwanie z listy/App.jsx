//pierwszy sposób

// const Person = props => {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <button onClick={props.delete}>usuń</button>
//     </li>
//   );
// };

//trzeci sposób

const Person = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan K." },
      { id: 2, name: "Piotr C." },
      { id: 3, name: "Marysia W." },
      { id: 4, name: "John S." }
    ]
  };

  //pierwszy sposób

  // handleDelete(id) {
  //   const people = [...this.state.people];//tworzenie kopii tablicy
  //   const index = people.findIndex(person => person.id === id);
  //   people.splice(index, 1);
  //   this.setState({
  //     people
  //   });
  // }

  //drugi sposób

  // handleDelete(name) {
  //   // let people = Array.from(this.state.people);//inny sposób na tworzenie kopii tablicy
  //   let people = this.state.people.slice(); //to co wyżej, na inny sposób

  //   people = people.filter(person => name !== person.name);
  //   this.setState({
  //     people
  //   });
  // }

  //trzeci sposób
  handleDelete = id => {
    const people = [...this.state.people]; //tworzenie kopii tablicy
    const index = people.findIndex(person => person.id === id);
    people.splice(index, 1);
    this.setState({
      people
    });
  };

  render() {
    //pierwszy sposób

    // const people = this.state.people.map(person => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.id)}
    //   />

    //drugi sposób
    // const people = this.state.people.map(person => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.name)}
    //   />

    //trzeci sposób
    const people = this.state.people.map(person => (
      <Person key={person.id} name={person.name} delete={this.handleDelete} />
    ));
    return (
      <div>
        <ul>{people}</ul>
      </div>
    );
  }
}
ReactDOM.render(<List />, document.getElementById("root"));

const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female"
    },
    {
      id: 4,
      age: 30,
      name: "Darek",
      sex: "male"
    },
    {
      id: 5,
      age: 16,
      name: "Lolek",
      sex: "male"
    }
  ]
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>Użytkownik {user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>
      Wiek użytkownika <strong> {user.age}</strong>
    </p>
    <p>Płeć użytkownika {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all"
  };

  handleUsersFilter = () => {};

  userList = () => {
    let users = this.props.data.users;
    users = users.map(user => <Item user={user} key={user.id} />);
    return users;
  };
  render() {
    <div>
      <button onChange={this.handleUsersFilter.bind(this, "all")}>
        Wszyscy
      </button>
      <button>Kobiety</button>
      <button>Mężczyźni</button>
      {this.userList()}
    </div>;
    return <div>{Item}</div>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));

// class App extends React.Component {
//   state = {
//     counter: 0
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello!</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

console.log(React);
console.log(ReactDOM);

const element = (
  <section>
    {" "}
    <div id="app" key="object1">
      {" "}
      Pierwszy element React{" "}
    </div>
  </section>
);

const element2 = React.createElement("div", null, "pierwszy element react");

const element3 = (
  <div>
    <p id="main" className="Red">
      tekst
    </p>
  </div>
);

const element5 = (
  <React.Fragment>
    <section />
    <section />
  </React.Fragment>
);

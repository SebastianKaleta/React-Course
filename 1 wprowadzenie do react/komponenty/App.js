//komponent funkcyjny,bezstanowy

const Header = () => {
  return <h1>Witaj na stronie</h1>;
};

// komponent klasowy, stanowy

class Blog extends React.Component {
  state = {
    number: 1
  };
  render() {
    return (
      <section>
        <h2>Artykuł nr {this.state.number}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          similique hic dolore amet officiis nobis doloremque, ad molestiae
          corrupti nemo, error inventore nisi. Nulla laborum sint quibusdam
          veniam, blanditiis unde.
        </p>
      </section>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

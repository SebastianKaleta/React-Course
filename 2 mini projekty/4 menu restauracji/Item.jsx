const Item = props => {
  debugger;
  <li style={props.active ? { fontWeight: "bold" } : { color: "gray" }}>
    {props.name}
  </li>;
};

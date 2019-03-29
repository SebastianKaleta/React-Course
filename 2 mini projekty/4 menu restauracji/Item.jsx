const Item = props => {
  <li
    style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
    onClick={props.changeStatus}
  >
    {props.name}
  </li>;
};

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

// DRUGI SPOSÓB NA MENU

const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contacts" },
  { name: "Panel Admina", path: "/admin" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>
        {/* PIERWSZY SPOSÓB NA MENU
        
        <li>
          <NavLink to="/">Start</NavLink>
        </li>
        <li>
          <NavLink to="products">Produkty</NavLink>
        </li>
        <li>
          <NavLink to="contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="admin">Panel admina</NavLink>
        </li> */}
        {menu}
      </ul>
    </nav>
  );
};

export default Navigation;

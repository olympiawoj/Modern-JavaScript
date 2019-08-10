// var React = require("react");
//var NavLink = require("react-router-dom").NavLink;

import React from "react";
//this is not destructuring, this is named imports
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  );
}

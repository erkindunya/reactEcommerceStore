import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/About">
            About
          </NavLink>
          <NavLink to="/Contact">
            Contact
          </NavLink>
          <NavLink to="/Store">
            Store
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;

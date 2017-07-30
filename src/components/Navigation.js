import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Radium from "radium";
Radium(NavLink);

class Navigation extends Component {
  render() {
    let center = {
      textAlign: "center",
      marginTop: 25
    };
    let link = {
      margin: 10,
      fontFamily: "Julius Sans One",
      textDecoration: "none",
      ":hover": {
        color: "red"
      },
      ":visited": {
        color: "gray"
      }
    };

    return (
      <div style={center}>
        <nav>
          <NavLink
            style={link}
            activeStyle={{
              color: "gray",
              backgroundColor: "white"
            }}
            exact to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={link}
            activeStyle={{
              color: "gray",
              backgroundColor: "white"
            }}
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            style={link}
            activeStyle={{
              color: "gray",
              backgroundColor: "white"
            }}
            to="/Contact"
          >
            Contact
          </NavLink>
          <NavLink
            style={link}
            activeStyle={{
              color: "gray",
              backgroundColor: "white"
            }}
            to="/Store"
          >
            Store
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Radium(Navigation);

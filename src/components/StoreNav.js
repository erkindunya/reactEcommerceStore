import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class StoreNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink
            activeStyle={{
              color: "blue",
              backgroundColor: "white"
            }}
            to="/Store/SectionOne"
          >
            Section One
          </NavLink>
          <NavLink
            activeStyle={{
              color: "blue",
              backgroundColor: "white"
            }}
            to="/Store/SectionTwo"
          >
            Section Two
          </NavLink>
          <NavLink
            activeStyle={{
              color: "blue",
              backgroundColor: "white"
            }}
            to="/Store/SectionThree"
          >
            Section Three
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default StoreNav;

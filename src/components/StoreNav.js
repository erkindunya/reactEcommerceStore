import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class StoreNav extends Component {
  render() {
    let margin = {
      margin: 10,
      textDecoration: "none"
    }
    return (
      <div>
        <nav>
          <NavLink style={margin}
            activeStyle={{
              color: "gray",
              backgroundColor: "white",
              textDecoration: "none"
            }}
            to="/Store/HighTops"
          >
            High Tops
          </NavLink>
          <NavLink style={margin}
            activeStyle={{
              color: "gray",
              backgroundColor: "white",
              textDecoration: "none"
            }}
            to="/Store/LowTops"
          >
            Low Tops
          </NavLink>
          <NavLink style={margin}
            activeStyle={{
              color: "gray",
              backgroundColor: "white",
              textDecoration: "none"
            }}
            to="/Store/Jordans"
          >
            Jordans
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default StoreNav;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Radium from "radium";
Radium(NavLink);

class Navigation extends Component {
  render() {
    let center = {
      textAlign: "center",
      marginTop: 25,
      marginRight: 40,
      marginLeft: 40
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
    let shoppingCart = {
      fontSize: 25,
      padding: 20
    };
    let purchases = {
      color: "white",
      fontSize: 6,
      backgroundColor: "red",
      borderRadius: "50%",
      width: 12,
      height: 12,
      textAlign: "center",
      margin: "0 auto",
      position: "relative",
      bottom: 32,
      left: 13
    };
    let purchaseCount = {
      textAlign: "center",
      paddingTop: 2
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
            exact
            to="/"
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
          <div style={shoppingCart}>
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            <div style={purchases}>
              <p style={purchaseCount}> 1 </p>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Radium(Navigation);

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class StoreNav extends Component {
  render() {

    let container = {
      margin: "0 15%",
      borderTop: "1px solid black",
      borderBottom: "1px solid black"
    }

    let flex = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "baseline"
    };

    let navImg = {
      width: "70%"
    };

let navContainer = {
      width: "30.8%",
      textAlign: "center",
      margin: 5
    };

    return (
      <div style={container}>
        <nav style={flex}> 
          <NavLink
            style={navContainer}
            activeStyle={{
              color: "gray",
              backgroundColor: "white",
              textDecoration: "none"
            }}
            to="/Store/HighTops"
          >
            <div>
              <img style={navImg}
                src="https://images.nike.com/is/image/DotCom/PDP_P/M7650_102_G_PREM/converse-chuck-taylor-all-star-high-top-unisex-shoe.png?fmt=png-alpha"
                alt=""
              />
              <p>High Tops</p>
            </div>
          </NavLink>
          <NavLink
            style={navContainer}
            activeStyle={{
              color: "gray",
              backgroundColor: "white",
              textDecoration: "none"
            }}
            to="/Store/LowTops"
          >
            <div>
              <img style={navImg}
                src="https://images.nike.com/is/image/DotCom/THN_PS/M7652_000/converse-chuck-taylor-all-star-low-top-unisex-shoe.jpg?hei=300&wid=400&fmt=png"
                alt=""
              />
              <p>Low Tops</p>
            </div>
          </NavLink>
          <NavLink
            style={navContainer}
            activeStyle={{
              color: "gray",
              backgroundColor: "white",
              textDecoration: "none"
            }}
            to="/Store/Jordans"
          >
            <div>
              <img style={navImg}
                src="http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/eaww6vgyna0s0mxmlcts.jpg"
                alt=""
              />
              <p>Jordans</p>
            </div>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default StoreNav;

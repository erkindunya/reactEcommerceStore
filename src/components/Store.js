import React, { Component } from "react";
import StoreNav from "./StoreNav";

class Store extends Component {
  
  render() {
    let center = {
      textAlign: "center",
      fontFamily: "Julius Sans One"
    };
    return (
      <div style={center}>
        <h1>Shop</h1>
        <StoreNav />
      </div>
    );
  }
}

export default Store;

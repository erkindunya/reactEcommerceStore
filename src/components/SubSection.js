import React, { Component } from "react";
import Store from "./Store";

class SubStore extends Component {
  render() {
    let center = {
      textAlign: "center"
    }
    let page = this.props.match.params.service;
    console.log(page);
    if (page === "HighTops") {
      return (
        <div style={center}>
          <Store />
          <h1>High Tops</h1>
        </div>
      );
    } else if (page === "LowTops") {
      return (
        <div style={center}>
          <Store />
          <h1>Low Tops</h1>
        </div>
      );
    } else if (page === "Jordans") {
      return (
        <div style={center}>
          <Store />
          <h1>Jordans</h1>
        </div>
      );
    }
  }
}

export default SubStore;

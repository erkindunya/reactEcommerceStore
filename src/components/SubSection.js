import React, { Component } from "react";
import Store from "./Store";

class SubStore extends Component {
  render() {
    let page = this.props.match.params.service;
    console.log(page);
    if (page === "SectionOne") {
      return (
        <div>
          <Store />
          <h1>This is the first section of the Store</h1>
        </div>
      );
    } else if (page === "SectionTwo") {
      return (
        <div>
          <Store />
          <h1>This is the Second section of the Store</h1>
        </div>
      );
    } else if (page === "SectionThree") {
      return (
        <div>
          <Store />
          <h1>This is the Third section of the Store</h1>
        </div>
      );
    }
  }
}

export default SubStore;

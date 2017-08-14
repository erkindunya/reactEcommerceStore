import React, { Component } from "react";

class ItemsInCart extends Component {
  render() {
    console.log(this.props.purchases)
    return (
      <div>
          My Cart
      </div>
    );
  }
}

export default ItemsInCart;
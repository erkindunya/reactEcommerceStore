import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: []
    };
  }



  render() {
    let shoppingCart = {
      textAlign: "center",
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
      <Link to="/MyCart">
        <div style={shoppingCart}>
          <i className="fa fa-shopping-cart" aria-hidden="true" />
          <div style={purchases}>
            <p style={purchaseCount}>
              {this.props.items}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ShoppingCart;

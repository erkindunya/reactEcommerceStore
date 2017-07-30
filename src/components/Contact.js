import React, { Component } from 'react';

class Contact extends Component {
  render() {
    let center = {
      textAlign: "center",
      fontFamily: "Julius Sans One"
    }
    return (
      <div style={center}>
        <h1>Contact Us</h1>
        <p>Phone: (444)-444-4444 </p>
        <p>Email: retroKicks@gmail.com</p>
      </div>
    );
  }
}

export default Contact;
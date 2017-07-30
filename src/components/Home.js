import React, { Component } from 'react';

class Home extends Component {
  render() {
    let center = {
      textAlign: "center",
      fontFamily: 'Julius Sans One',
      fontSize: '5rem',
      color: "black"
    }

    let img = {
      width: "30%"
    }

    let margin = {
      margin: 20
    }

    return (
      <div style={center}>
        <h1 style={margin}>Retro Kicks</h1>
        <img src="https://media.giphy.com/media/5WlXGaNnB0N6o/giphy.gif" alt=""/>
      </div>
    );
  }
}

export default Home;
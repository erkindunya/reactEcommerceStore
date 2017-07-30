import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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

    let link = {
      textDecoration: "none",
      fontFamily: 'Julius Sans One',
      color: "black"      
    }

    return (
      <div style={center}>
        <h1 style={margin}>Retro Kicks</h1>
        <img src="https://media.giphy.com/media/5WlXGaNnB0N6o/giphy.gif" alt=""/>
        <br/>
        <Link style={link} to="/Store">SHOP NOW</Link>
        
      </div>
    );
  }
}

export default Home;
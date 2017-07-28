import React, { Component } from "react";
import "../styles/App.css";
import BaseLayout from "./BaseLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout />
      </div>
    );
  }
}

export default App;

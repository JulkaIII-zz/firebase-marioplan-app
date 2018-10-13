import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>MarioPlan</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

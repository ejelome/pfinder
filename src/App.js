import React, { createElement, Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return createElement(
      "div",
      { className: "App" },
      createElement("h1", null, "hello, world")
    );
  }
}

export default App;

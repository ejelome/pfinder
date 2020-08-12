import React, { Component } from "react";
import "./App.css";

class Heading extends Component {
  constructor() {
    super();

    this.state = {
      title: "hello, world",
    };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
      </div>
    );
  }
}

export default App;

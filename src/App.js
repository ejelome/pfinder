import React, { Component } from "react";
import "./App.css";

class Heading extends Component {
  state = {
    title: "hello, world",
  };

  render() {
    const { title } = this.state;

    return <h1>{title}</h1>;
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

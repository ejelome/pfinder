import React, { Component } from "react";
import "./App.css";

class Heading extends Component {
  static defaultProps = {
    title: "hello, world",
  };

  render() {
    return <h1>{this.props.title}</h1>;
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

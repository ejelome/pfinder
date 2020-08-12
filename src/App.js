import React, { Component } from "react";
import "./App.css";

class Heading extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class App extends Component {
  say(greeting = "hi") {
    return `${greeting}, world`;
  }

  render() {
    const greeting = "hello";
    const title = this.say(greeting).toUpperCase();

    return (
      <div className="App">
        <Heading title={title} />
      </div>
    );
  }
}

export default App;

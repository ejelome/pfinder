import React, { Component } from "react";
import "./App.css";

class App extends Component {
  say(greeting = "hi") {
    return `${greeting}, world`;
  }

  render() {
    const greeting = "hello";
    const upper = true;

    return (
      <div className="App">
        <h1>{upper ? this.say(greeting).toUpperCase() : this.say(greeting)}</h1>
      </div>
    );
  }
}

export default App;

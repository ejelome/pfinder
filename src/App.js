import React, { Component } from "react";
import "./App.css";

class App extends Component {
  say(greeting = "hi") {
    return `${greeting}, world`;
  }

  render() {
    const greeting = "hello";
    const upper = true;

    if (upper) {
      return (
        <div className="App">
          <h1>{this.say(greeting).toUpperCase()}</h1>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>{this.say(greeting)}</h1>
      </div>
    );
  }
}

export default App;

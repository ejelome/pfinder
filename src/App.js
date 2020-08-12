import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class Heading extends Component {
  static defaultProps = {
    title: "hello, world",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class App extends Component {
  render() {
    const arrayOfNumbers = [1, 2, 3];

    return (
      <div className="App">
        <Heading title={arrayOfNumbers} />
      </div>
    );
  }
}

export default App;

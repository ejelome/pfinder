import React, { Component } from "react";
import "./App.css";

class Heading extends Component {
  render() {
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}

class App extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    fetch(url)
      .then((response) => response.json())
      .then((post) => this.setState({ post }));
  }

  render() {
    const { post } = this.state;

    return (
      <div className="App">
        <Heading {...post} />
      </div>
    );
  }
}

export default App;

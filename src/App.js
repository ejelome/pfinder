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

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetch(url);
    const post = await response.json();

    this.setState({ post });
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

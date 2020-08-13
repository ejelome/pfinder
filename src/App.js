import React, { Component } from "react";
import "./App.css";

class Spinner extends Component {
  render() {
    const { src } = this.props;
    const imagePath = `${process.env.PUBLIC_URL}/${src}`;

    return <img alt="" src={imagePath} />;
  }
}

class Heading extends Component {
  render() {
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}

class App extends Component {
  state = {
    post: {},
    loading: true,
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetch(url);
    const post = await response.json();

    this.setState({ post, loading: false });
  }

  render() {
    const { loading, post } = this.state;
    const imagePath = "spinner.gif";

    const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
    const SECRET_PASSWORD = process.env.REACT_APP_SECRET_PASSWORD;
    console.log([SECRET_KEY, SECRET_PASSWORD]);

    return (
      <div className="App">
        {loading ? <Spinner src={imagePath} /> : <Heading {...post} />}
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from "./components/layouts/Search";
import Posts from "./components/posts/Posts";
import "./App.css";

class Alert extends Component {
  render() {
    const { alert } = this.props;

    return (
      alert && (
        <div className={`alert alert-${alert.type}`}>{alert.message}</div>
      )
    );
  }
}

class Post extends Component {
  componentDidMount() {
    const { getPost } = this.props;
    const { id } = this.props.match.params;

    getPost(id);
  }

  render() {
    const { post } = this.props;
    const { title, body } = post;

    return (
      <Fragment>
        <h1>{title}</h1>
        <p>{body}</p>
      </Fragment>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    );
  }
}

class App extends Component {
  state = {
    alert: null,
    posts: [],
    post: {},
  };

  searchPosts = async (search) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${search}`;
    const response = await fetch(url);
    const posts = await response.json();

    this.setState({ posts });
  };

  clearPosts = () => this.setState({ posts: [] });

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    const duration = 3000;

    setTimeout(() => this.setState({ alert: null }), duration);
  };

  getPost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const post = await response.json();

    this.setState({ post });
  };

  render() {
    const { alert, posts, post } = this.state;
    const showClear = posts.length ? true : false;

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Alert alert={alert} />
                  <Search
                    searchPosts={this.searchPosts}
                    clearPosts={this.clearPosts}
                    showClear={showClear}
                    setAlert={this.setAlert}
                  />
                  <Posts title="Posts" posts={posts} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/posts/:id"
              render={(props) => (
                <Post {...props} getPost={this.getPost} post={post} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

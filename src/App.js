import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

class SearchForm extends Component {
  state = {
    search: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { search } = this.state;
    const { searchPosts, setAlert } = this.props;

    const message = "Please enter a keyword";
    const type = "danger";

    search ? searchPosts(search) : setAlert(message, type);
  };

  render() {
    const { search } = this.state;
    const { clearPosts, showClear } = this.props;

    return (
      <form onSubmit={this.onSubmit} action="get">
        <input
          name="search"
          type="search"
          value={search}
          onChange={this.onChange}
        />
        <input name="submit" type="submit" value="Search" />

        {showClear && (
          <button type="button" onClick={clearPosts}>
            Clear
          </button>
        )}
      </form>
    );
  }
}

class Posts extends Component {
  render() {
    const { title, posts } = this.props;

    return (
      <div className="posts">
        <h2>{title}</h2>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

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
                  <SearchForm
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

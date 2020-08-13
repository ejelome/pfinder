import React, { Component } from "react";
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

    this.props.searchPosts(search);
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.onSubmit} action="get">
        <input
          name="search"
          type="search"
          value={search}
          onChange={this.onChange}
        />
        <input name="submit" type="submit" value="Search" />
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
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  state = {
    posts: [],
  };

  searchPosts = async (search) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${search}`;
    const response = await fetch(url);
    const posts = await response.json();

    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <SearchForm searchPosts={this.searchPosts} />
        <Posts title="Posts" posts={posts} />
      </div>
    );
  }
}

export default App;

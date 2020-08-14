import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

class Posts extends Component {
  state = {};

  static defaultProps = {
    title: "Posts",
    posts: [],
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
  };

  render() {
    const { title, posts } = this.props;

    return (
      <div className="posts">
        <h2>{title}</h2>
        <ul>
          {posts.map((post, i) => (
            <PostItem key={i} {...post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;

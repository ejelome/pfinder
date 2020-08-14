import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

const Posts = ({ title, posts }) => {
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
};

Posts.defaultProps = {
  title: "Posts",
  posts: [],
};

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};

export default Posts;

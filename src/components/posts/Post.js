import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Post = ({ getPost, post, match }) => {
  useEffect(() => {
    const { id } = match.params;

    getPost(id);
  });

  const { title, body } = post;

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

Post.defaultProps = {};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};

export default Post;

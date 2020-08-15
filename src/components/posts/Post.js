import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../contexts/AppContext";

const Post = ({ match }) => {
  const appContext = useContext(AppContext);
  const { getPost, post } = appContext;

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

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};

export default Post;

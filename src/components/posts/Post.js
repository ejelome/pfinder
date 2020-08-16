import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../contexts/AppContext";

const Post = ({
  match: {
    params: { id },
  },
}) => {
  const {
    post: { title, body },
    getPost,
  } = useContext(AppContext);

  useEffect(() => {
    getPost(id);
  });

  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{body}</p>
    </Fragment>
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

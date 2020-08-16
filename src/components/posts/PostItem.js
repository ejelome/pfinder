import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { NAV_POSTS } from "../../constants";

const PostItem = ({ id, title }) => {
  const { path: postsPath } = NAV_POSTS;

  return (
    <li>
      <Link to={`${postsPath}/${id}`}>{title}</Link>
    </li>
  );
};

PostItem.defaultProps = {};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostItem;

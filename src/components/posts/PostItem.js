import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostItem = ({ id, title }) => {
  return (
    <li className="post-item">
      <Link to={`/posts/${id}`}>{title}</Link>
    </li>
  );
};

PostItem.defaultProps = {};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostItem;

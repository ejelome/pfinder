import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PostItem extends Component {
  state = {};

  static defaultProps = {};

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { id, title } = this.props;

    return (
      <li className="post-item">
        <Link to={`/posts/${id}`}>{title}</Link>
      </li>
    );
  }
}

export default PostItem;

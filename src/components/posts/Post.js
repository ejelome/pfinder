import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {
  state = {};

  static defaultProps = {};

  static propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    }),
  };

  componentDidMount() {
    const { getPost } = this.props;
    const { id } = this.props.match.params;

    getPost(id);
  }

  render() {
    const { post } = this.props;
    const { title, body } = post;

    return (
      <div className="post">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;

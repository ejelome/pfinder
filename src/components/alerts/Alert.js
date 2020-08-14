import React, { Component } from "react";
import PropTypes from "prop-types";

class Alert extends Component {
  state = {};

  static defaultProps = {};

  static propTypes = {
    alert: PropTypes.object.isRequired,
  };

  render() {
    const { alert } = this.props;

    return (
      Boolean(Object.keys(alert).length) && (
        <div className={`alert alert-${alert.type}`}>{alert.message}</div>
      )
    );
  }
}

export default Alert;

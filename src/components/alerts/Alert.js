import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  return (
    Boolean(Object.keys(alert).length) && (
      <div className={`alert alert-${alert.type}`}>{alert.message}</div>
    )
  );
};

Alert.defaultProps = {};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

export default Alert;

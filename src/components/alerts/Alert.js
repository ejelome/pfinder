import React, { useContext } from "react";

import { AlertContext } from "../../contexts/AlertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    Boolean(Object.keys(alert).length) && (
      <div className={`alert alert-${alert.type}`}>{alert.message}</div>
    )
  );
};

export default Alert;

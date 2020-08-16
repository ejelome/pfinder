import React, { useContext } from "react";

import { AlertContext } from "../../contexts/AlertContext";

const Alert = () => {
  const { admonition, message } = useContext(AlertContext);

  const showAlert = Boolean(admonition.length);
  const AlertMessage = showAlert && (
    <div>
      {`${admonition.charAt(0).toUpperCase()}${admonition.slice(1)}`}! {message}
    </div>
  );

  return AlertMessage;
};

export default Alert;

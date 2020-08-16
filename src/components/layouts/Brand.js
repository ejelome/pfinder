import React from "react";
import { Link } from "react-router-dom";

import { APP_NAME, APP_BASE_PATH as homePath, APP_LOGO } from "../../constants";

const Brand = () => {
  const { pathname: currentPath } = window.location;
  const appTitleKlass = "app-name";
  const AppTitle =
    currentPath === homePath ? (
      <h1 className={appTitleKlass}>{APP_NAME}</h1>
    ) : (
      <div className={appTitleKlass}>{APP_NAME}</div>
    );
  const { alt } = APP_LOGO;

  return (
    <Link to={homePath}>
      <img {...APP_LOGO} alt={alt} />
      {AppTitle}
    </Link>
  );
};

export default Brand;

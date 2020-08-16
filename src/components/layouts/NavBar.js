import React from "react";
import { Link } from "react-router-dom";

import { NAV_HOME, NAV_ABOUT } from "../../constants";

import Brand from "./Brand";

const NavBar = () => {
  const navLinks = [NAV_HOME, NAV_ABOUT];

  return (
    <nav>
      <Brand />
      <ul>
        {navLinks.map(({ name, path }, i) => (
          <li key={i}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

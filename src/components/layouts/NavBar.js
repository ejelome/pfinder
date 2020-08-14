import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className="nav-bar">
      <ul>
        {links.map(({ title, url }, i) => (
          <li key={i}>
            <Link to={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  links: [{ title: "Home", url: "/" }],
};

NavBar.propTypes = {
  links: PropTypes.array.isRequired,
};

export default NavBar;

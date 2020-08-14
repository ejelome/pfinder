import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  static defaultProps = {
    links: [{ title: "Home", url: "/" }],
  };

  static propTypes = {
    links: PropTypes.array.isRequired,
  };

  render() {
    const { links } = this.props;

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
  }
}

export default NavBar;

import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const Heading = ({ title }) => {
  return <h1>{title}</h1>;
};

Heading.defaultProps = {
  title: "hello, world",
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => {
  const state = {
    title: "hello, world",
  };

  return (
    <div className="App">
      <Heading {...state} />
    </div>
  );
};

export default App;

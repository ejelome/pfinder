import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const Heading = (props) => {
  const { title } = props;

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
  const { title } = state;

  return (
    <div className="App">
      <Heading title={title} />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchPosts, clearPosts, showAlert, showClear }) => {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({});

  const onChange = (e) => {
    const { value } = e.target;

    setSearch(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setAlert({ message: "Please enter a keyword", type: "danger" });

    const { message, type } = alert;

    search ? searchPosts(search) : showAlert(message, type);
  };

  return (
    <form className="search" action="" method="" onSubmit={onSubmit}>
      <input name="search" type="search" value={search} onChange={onChange} />
      <input name="submit" type="submit" value="Search" />

      {showClear && (
        <button type="button" onClick={clearPosts}>
          Clear
        </button>
      )}
    </form>
  );
};

Search.defaultProps = {
  showClear: true,
};

Search.propTypes = {
  searchPosts: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
  clearPosts: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;

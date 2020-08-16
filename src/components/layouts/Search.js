import React, { useContext, useState } from "react";

import { AppContext } from "../../contexts/AppContext";
import { AlertContext } from "../../contexts/AlertContext";

const Search = () => {
  const { posts, searchPosts, clearPosts } = useContext(AppContext);
  const { setAlert } = useContext(AlertContext);

  const defaultSearch = "";
  const [search, setSearch] = useState(defaultSearch);

  const handleChange = ({ target: { value } }) => setSearch(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const admonition = "warning";
    const message = "Please enter a keyword";

    search ? searchPosts(search) : setAlert(admonition, message);
  };

  const showClear = Boolean(Object(posts).length);
  const ClearButton = showClear && (
    <button type="button" onClick={clearPosts}>
      Clear
    </button>
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" value={search} onChange={handleChange} />
      <input type="submit" value="Search" />
      {ClearButton}
    </form>
  );
};

export default Search;

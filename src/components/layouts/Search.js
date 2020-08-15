import React, { useContext, useState } from "react";

import { AppContext } from "../../contexts/AppContext";
import { AlertContext } from "../../contexts/AlertContext";

const Search = () => {
  const appContext = useContext(AppContext);
  const alertContext = useContext(AlertContext);
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    const { value } = e.target;

    setSearch(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { setAlert } = alertContext;
    const { searchPosts } = appContext;

    const message = "Please enter a keyword";
    const type = "danger";

    search ? searchPosts(search) : setAlert(message, type);
  };

  const { clearPosts, posts } = appContext;

  const showClear = Boolean(Object(posts).length);

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

export default Search;

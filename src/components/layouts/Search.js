import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    search: "",
    alert: {
      message: "Please enter a keyword",
      type: "danger",
    },
  };

  static defaultProps = {
    showClear: true,
  };

  static propTypes = {
    searchPosts: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    clearPosts: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { search, alert } = this.state;
    const { message, type } = alert;
    const { searchPosts, setAlert } = this.props;

    search ? searchPosts(search) : setAlert(message, type);
  };

  render() {
    const { search } = this.state;
    const { clearPosts, showClear } = this.props;

    return (
      <form className="search" action="" method="" onSubmit={this.onSubmit}>
        <input
          name="search"
          type="search"
          value={search}
          onChange={this.onChange}
        />
        <input name="submit" type="submit" value="Search" />

        {showClear && (
          <button type="button" onClick={clearPosts}>
            Clear
          </button>
        )}
      </form>
    );
  }
}

export default Search;

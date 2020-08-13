import React, { Component } from "react";
import "./App.css";

class SearchForm extends Component {
  state = {
    search: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { search } = this.state;

    return (
      <form action="get">
        <input
          name="search"
          type="search"
          value={search}
          onChange={this.onChange}
        />
        <input name="submit" type="submit" value="Search" />
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
      </div>
    );
  }
}

export default App;

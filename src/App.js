import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AppProvider } from "./contexts/AppContext";
import { AlertProvider } from "./contexts/AlertContext";

import Alert from "./components/alerts/Alert";
import NavBar from "./components/layouts/NavBar";
import Search from "./components/layouts/Search";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";

import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <AlertProvider>
                  <Alert />
                  <Search />
                  <Posts />
                </AlertProvider>
              )}
            />
            <Route exact path="/posts/:id" component={Post} />
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;

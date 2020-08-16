import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NAV_HOME, NAV_ABOUT, NAV_POSTS } from "./constants";

import { AppProvider } from "./contexts/AppContext";

import NavBar from "./components/layouts/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Post from "./components/posts/Post";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const App = () => {
  const { path: homePath } = NAV_HOME;
  const { path: aboutPath } = NAV_ABOUT;
  const { path: postsPath } = NAV_POSTS;
  const postPath = `${postsPath}/:id`;

  return (
    <AppProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={homePath} component={Home} />
          <Route exact path={aboutPath} component={About} />
          <Route exact path={postPath} component={Post} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;

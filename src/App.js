import React, { useState } from "react";
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
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const clearPosts = () => setPosts([]);

  const getPost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const post = await response.json();

    setPost(post);
  };

  const showClear = posts.length ? true : false;

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <AlertProvider>
                  <Alert />
                  <Search clearPosts={clearPosts} showClear={showClear} />
                  <Posts title="Posts" posts={posts} />
                </AlertProvider>
              )}
            />
            <Route
              exact
              path="/posts/:id"
              render={(props) => (
                <Post {...props} getPost={getPost} post={post} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;

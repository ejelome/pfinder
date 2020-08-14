import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Search from "./components/layouts/Search";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";
import Alert from "./components/alerts/Alert";
import "./App.css";

const App = () => {
  const [alert, setAlert] = useState({});
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const searchPosts = async (search) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${search}`;
    const response = await fetch(url);
    const posts = await response.json();

    setPosts(posts);
  };

  const clearPosts = () => setPosts([]);

  const showAlert = (message, type) => {
    setAlert({ alert: { message, type } });

    const duration = 3000;

    setTimeout(() => setAlert({}), duration);
  };

  const getPost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const post = await response.json();

    setPost(post);
  };

  const showClear = posts.length ? true : false;

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Alert alert={alert} />
                <Search
                  searchPosts={searchPosts}
                  clearPosts={clearPosts}
                  showClear={showClear}
                  showAlert={showAlert}
                />
                <Posts title="Posts" posts={posts} />
              </Fragment>
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
  );
};

export default App;

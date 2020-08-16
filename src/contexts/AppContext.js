import React, { createContext, useReducer } from "react";

import { SEARCH_POSTS, CLEAR_POSTS, GET_POST } from "../types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const reducer = (state, { payload, type }) => {
    let { posts, post } = state;

    switch (type) {
      case "SEARCH_POSTS":
        posts = payload;

        return { ...state, posts };
      case "CLEAR_POSTS":
        posts = [];
        return { ...state, posts };
      case "GET_POST":
        post = payload;

        return { ...state, post };
      default:
        return state;
    }
  };

  const initialState = { postsTitle: "Posts", posts: [], post: {} };

  const [state, dispatch] = useReducer(reducer, initialState);

  const searchPosts = async (search) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${search}`;
    const response = await fetch(url);
    const posts = await response.json();
    const payload = posts;

    dispatch({ type: SEARCH_POSTS, payload });
  };

  const clearPosts = () => dispatch({ type: CLEAR_POSTS });

  const getPost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const post = await response.json();
    const payload = post;

    dispatch({ type: GET_POST, payload });
  };

  const { Provider } = AppContext;

  const actions = { searchPosts, clearPosts, getPost };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export default AppProvider;

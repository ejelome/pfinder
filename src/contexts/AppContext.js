import React, { createContext, useReducer } from "react";

import { SEARCH_POSTS, CLEAR_POSTS, GET_POST } from "../types/appTypes";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const reducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
      case "SEARCH_POSTS":
        return {
          ...state,
          posts: payload,
        };
      case "CLEAR_POSTS":
        return {
          ...state,
          posts: [],
        };
      case "GET_POST":
        return {
          ...state,
          post: payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    postsTitle: "Posts",
    posts: [],
    post: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const searchPosts = async (search) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${search}`;
    const response = await fetch(url);
    const posts = await response.json();

    dispatch({ type: SEARCH_POSTS, payload: posts });
  };

  const clearPosts = () => dispatch({ type: CLEAR_POSTS });

  const getPost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const post = await response.json();

    dispatch({ type: GET_POST, payload: post });
  };

  const { Provider } = AppContext;

  return (
    <Provider
      value={{
        postsTitle: state.postsTitle,
        posts: state.posts,
        searchPosts,
        clearPosts,
        post: state.post,
        getPost,
      }}
    >
      {children}
    </Provider>
  );
};

export default AppProvider;

import React, { createContext, useReducer } from "react";

import { SEARCH_POSTS } from "../types/appTypes";

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
      default:
        return state;
    }
  };

  const initialState = {
    postsTitle: "Posts",
    posts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const searchPosts = async (search) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${search}`;
    const response = await fetch(url);
    const posts = await response.json();

    dispatch({ type: SEARCH_POSTS, payload: posts });
  };

  const { Provider } = AppContext;

  return (
    <Provider
      value={{
        postsTitle: state.postsTitle,
        posts: state.posts,
        searchPosts,
      }}
    >
      {children}
    </Provider>
  );
};

export default AppProvider;

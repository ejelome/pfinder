import React, { useContext } from "react";

import { AppContext } from "../../contexts/AppContext";

import PostItem from "./PostItem";

const Posts = ({ title }) => {
  const appContext = useContext(AppContext);
  const { postsTitle, posts } = appContext;

  return (
    <div className="posts">
      <h2>{postsTitle}</h2>
      <ul>
        {posts.map((post, i) => (
          <PostItem key={i} {...post} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;

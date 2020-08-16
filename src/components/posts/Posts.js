import React, { useContext } from "react";

import { AppContext } from "../../contexts/AppContext";

import PostItem from "./PostItem";

const Posts = ({ title }) => {
  const { posts } = useContext(AppContext);

  return (
    <ul>
      {posts.map((post, i) => (
        <PostItem key={i} {...post} />
      ))}
    </ul>
  );
};

export default Posts;

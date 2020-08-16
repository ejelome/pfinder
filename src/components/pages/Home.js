import React from "react";

import { AlertProvider } from "../../contexts/AlertContext";

import Alert from "../alerts/Alert";
import Search from "../layouts/Search";
import Posts from "../posts/Posts";

const Home = () => {
  return (
    <AlertProvider>
      <Alert />
      <Search />
      <Posts />
    </AlertProvider>
  );
};

export default Home;

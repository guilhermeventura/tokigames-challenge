import React from "react";
import { Route } from "react-router-dom";
import App from "./../../App";

const Home = () => {
  return <Route path="/" component={App} />;
};

export default Home;

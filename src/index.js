/**
 * Our app Main Entry Point.
 *
 * @description Configures the application with
 *              redux/redux-saga and react-router
 */
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import initStore from "./helpers/store";
import AppRoot from "./components/app-root";

import "./index.scss";

const store = initStore();
ReactDOM.render(
  <AppRoot store={store} />,
  document.getElementById("tokigames-app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

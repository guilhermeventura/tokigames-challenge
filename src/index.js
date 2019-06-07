import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import initStore from "./helpers/store";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = initStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("tokigames-app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

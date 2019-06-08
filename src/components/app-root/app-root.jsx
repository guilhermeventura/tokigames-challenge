import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import { tokiTheme } from "./../../helpers/material-ui-theme";

import Home from "./../../routes/home";

const AppRoot = ({ store }) => (
  <ThemeProvider theme={tokiTheme}>
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  </ThemeProvider>
);

AppRoot.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppRoot;

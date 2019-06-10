/**
 * AppHeader View Component.
 *
 * @description The Application AppBar
 *
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbarIcon: {
    marginRight: theme.spacing(1)
  }
}));

const AppHeaderView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Icon className={classes.appbarIcon} color="secondary">
            stars
          </Icon>
          <Typography variant="h6" color="inherit">
            TokiGames Flight App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeaderView;

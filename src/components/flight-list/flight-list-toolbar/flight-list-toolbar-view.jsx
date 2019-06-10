/**
 * FlightList Toolbar component
 *
 * @description Handles all the possible interactions on the FlightList,
 *              like sorting, filtering, calling the AddNewFlightModal...
 *
 * @todo Split code logic for sorting, filtering to isolated components.
 */

import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import { ST_TYPES } from "../../../store/ducks/sorting-constants";
import {
  setVisibilityFilter,
  setSortType
} from "../../../store/ducks/sorting-duck";
import AddFlightModalView from "../../add-flight-modal";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  toolbarContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const FlightListToolbarView = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSortMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSortType = sortType => {
    if (!sortType) return;
    props.setSortType(sortType);
    handleSortMenuClose();
  };

  return (
    <Grid className={classes.toolbarContainer} container spacing={4}>
      <Grid item sm={4}>
        <Typography variant="h2">Flight List</Typography>
      </Grid>
      <Grid item sm={4}>
        <Typography component="span">Filter Flights by Type:</Typography>
        <Chip
          onClick={() => props.setSortFilter(ST_TYPES.SHOW_ALL)}
          clickable
          className={classes.chip}
          label="All"
          color={
            props.sortFilter === ST_TYPES.SHOW_ALL ? "secondary" : "default"
          }
        />
        <Chip
          onClick={() => props.setSortFilter(ST_TYPES.SHOW_BUSINESS)}
          className={classes.chip}
          label="Business"
          color={
            props.sortFilter === ST_TYPES.SHOW_BUSINESS
              ? "secondary"
              : "default"
          }
        />
        <Chip
          onClick={() => props.setSortFilter(ST_TYPES.SHOW_CHEAP)}
          className={classes.chip}
          label="Cheap"
          color={
            props.sortFilter === ST_TYPES.SHOW_CHEAP ? "secondary" : "default"
          }
        />
      </Grid>
      <Grid item sm={2}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleSortMenuClick}>
          Sort By <Icon>more_vert</Icon>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleSortMenuClose}>
          <MenuItem onClick={() => handleSortType(ST_TYPES.SORT_DEPARTURE_ASC)}>
            Departure (ascending)
          </MenuItem>
          <MenuItem
            onClick={() => handleSortType(ST_TYPES.SORT_DEPARTURE_DESC)}>
            Departure (descending)
          </MenuItem>
          <MenuItem onClick={() => handleSortType(ST_TYPES.SORT_ARRIVAL_ASC)}>
            Arrival (ascending)
          </MenuItem>
          <MenuItem onClick={() => handleSortType(ST_TYPES.SORT_ARRIVAL_DESC)}>
            Arrival (descending)
          </MenuItem>

          <MenuItem onClick={() => handleSortType(ST_TYPES.SORT_CATEGORY_ASC)}>
            Flight Type (Business)
          </MenuItem>
          <MenuItem onClick={() => handleSortType(ST_TYPES.SORT_CATEGORY_DESC)}>
            Flight Type (Cheap)
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item sm={2}>
        <AddFlightModalView />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  sortFilter: state.sortFilter,
  sortType: state.sortType
});

const mapDispatchToProps = dispatch => {
  return {
    setSortFilter: filter => dispatch(setVisibilityFilter(filter)),
    setSortType: sortType => dispatch(setSortType(sortType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightListToolbarView);

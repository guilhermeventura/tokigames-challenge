/**
 * Flight List Container component
 *
 * @description Is responsible to show and all
 *              Flights-related UI data
 */

import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";

import FlightItemView from "./flight-item";
import FlightListToolbarView from "./flight-list-toolbar";

import { getVisibleFlights, sortFlights } from "./../../store/selectors";

export const FlightListContainer = props => {
  const renderFlightList = flights => {
    if (!flights) return;

    let flightList = [];

    flights.map((flight, index) => {
      flightList.push(
        <Grid item key={flight.flightId}>
          <FlightItemView flightData={flight} />
        </Grid>
      );
    });

    return flightList;
  };

  return (
    <React.Fragment>
      <FlightListToolbarView />
      {props.hasSucceded && (
        <Snackbar
          autoHideDuration={4000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          open={props.hasSucceded}
          message={<span>Flight Saved!</span>}
        />
      )}
      <Grid container justify="center" spacing={4}>
        {props.isFetching ? (
          <Grid item align="center">
            <CircularProgress size={80} />
            <Typography variant="subtitle1">Fetching Flights...</Typography>
          </Grid>
        ) : (
          renderFlightList(props.flights)
        )}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  flights: getVisibleFlights(
    sortFlights(state.flightsReducer.flights, state.sortType),
    state.sortFilter
  ),
  sortFilter: state.sortFilter,
  isFetching: state.flightsReducer.isFetching,
  hasSucceded: state.hasSucceded
});

export default connect(
  mapStateToProps,
  null
)(FlightListContainer);

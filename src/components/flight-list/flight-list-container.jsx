/**
 * Flight List Container component
 *
 * @description Is responsible to show and control all
 *              Flights-related UI data
 */

import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { FL_TYPES } from "./../../store/ducks/flights-duck";

import FlightItemView from "./flight-item";

const FlightListContainer = ({ flights, addFakeFlight }) => {
  return (
    <Grid container>
      <Grid item sm={12}>
        <Button onClick={addFakeFlight}>Fake add</Button>
      </Grid>

      <Grid item>
        <FlightItemView flightData={flights} sm={4} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  flights: state.flights[0]
});

const mapDispatchToProps = dispatch => {
  return {
    addFakeFlight: () =>
      dispatch({
        type: FL_TYPES.ADD_NEW_FLIGHT,
        flight: {
          departure: "MOCK CARA",
          arrival: "Antalya",
          departureTime: 1561627856.0,
          arrivalTime: 1564410656.0
        }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightListContainer);

/**
 * Flights Action Types file
 *
 * @description Describes the action types for the Flights in general
 */

/**
 * Action Types
 */
export const FL_TYPES = {
  // 'FL' is a namespace for FlightList
  FETCH_FLIGHTS: "@@flights/FETCH_FLIGHTS",
  FETCH_FLIGHTS_REQUEST: "@@flights/FETCH_FLIGHTS_REQUEST",
  FETCH_FLIGHTS_SUCCESS: "@@flights/FETCH_FLIGHTS_SUCCESS",
  FETCH_FLIGHTS_FAILURE: "@@flights/FETCH_FLIGTHS_FAILURE",
  SAVE_FLIGHT_REQUEST: "@@flights/SAVE_FLIGHT_REQUEST",
  SAVE_FLIGHT_RESET: "@@flights/SAVE_FLIGHT_RESET",
  SAVE_FLIGHT_SUCCEDED: "@@flights/SAVE_FLIGHT_SUCCEDED",
  SAVE_FLIGHT_ERROR: "@@flights/SAVE_FLIGHT_ERROR",
  FETCH_BUSINESS_FLIGHTS: "@@flights/FETCH_BUSINESS_FLIGHTS",
  FETCH_CHEAP_FLIGHTS: "@@flights/FETCH_CHEAP_FLIGHTS"
};

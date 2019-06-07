/**
 * Flight List Duck File
 *
 * @description the redux Duck for the flight-list Component.
 */

//import * as CONFIG from "./../../helpers/setup"; // we'll be using this later. ;)

/**
 * Action Types
 */

export const FL_TYPES = {
  // 'FL' is a namespace for FlightList
  ADD_NEW_FLIGHT: "@@flightList/ADD_NEW_FLIGHT",
  REMOVE_FLIGHT: "@@flightList/REMOVE_FLIGHT"
};

/**
 * Initializing state
 */

const initialState = {
  flightList: []
};

/**
 * Reducer
 */

export const flightList = (state = initialState, action) => {
  switch (action.type) {
    case FL_TYPES.ADD_NEW_FLIGHT:
      return state;
    case FL_TYPES.REMOVE_FLIGHT:
      return state;
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export function* addNewFlight() {
  yield console.log("HELLO FlightList Saga :)");
}

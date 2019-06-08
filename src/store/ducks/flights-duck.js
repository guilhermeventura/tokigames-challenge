/**
 * Flight List Duck File
 *
 * @description the redux Duck for the flight-list Component.
 */
import { takeEvery, put } from "redux-saga/effects";

//import * as CONFIG from "./../../helpers/setup"; // we'll be using this later. ;)

/**
 * Action Types
 */
export const FL_TYPES = {
  // 'FL' is a namespace for FlightList
  GET_ALL_FLIGHTS: "@@flights/GET_ALL_FLIGHTS",
  ADD_NEW_FLIGHT: "@@flights/ADD_NEW_FLIGHT",
  REMOVE_FLIGHT: "@@flights/REMOVE_FLIGHT"
};

/**
 * Initializing state
 */
const initialState = {
  flights: [
    {
      departure: "Ankara",
      arrival: "Antalya",
      departureTime: 1561627856.0,
      arrivalTime: 1564410656.0
    } // JUST A MOCK
  ]
};

/**
 * Reducer
 */
export const flights = (state = initialState, action) => {
  switch (action.type) {
    case FL_TYPES.GET_ALL_FLIGHTS:
      return state.flights;
    case FL_TYPES.ADD_NEW_FLIGHT:
      return Object.assign({}, state, {
        flights: [{ ...state.flights, ...action.flight }]
      });
    case FL_TYPES.REMOVE_FLIGHT:
      return state;
    default:
      return state;
  }
};

/**
 * SAGAS
 */

// worker sagas
export function* addNewFlight() {
  yield console.log("HELLO FlightList Saga :)");
}

// watcher sagas
export function* watchFlights() {
  yield takeEvery(FL_TYPES.ADD_NEW_FLIGHT, addNewFlight);
}

// MOCKS
const businessMock = {
  departure: "Ankara",
  arrival: "Antalya",
  departureTime: 1561627856.0,
  arrivalTime: 1564410656.0
};

const cheapMock = {
  route: "Cruz del Eje-Antalya",
  departure: 1558902656.0,
  arrival: 1558902656.0
};

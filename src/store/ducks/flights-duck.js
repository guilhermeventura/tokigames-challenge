/**
 * Flight List Duck File
 *
 * @description the redux Duck for the flight-list Component.
 */

import { combineReducers } from "redux";
import { take, all, takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";

import { FL_TYPES } from "./flights-constants";
import * as CONFIG from "./../../helpers/setup";

import { transformBusinessFlight, transformCheapFlight } from "../mutations";

/**
 * Reducers
 */
export const flights = (state = [], action) => {
  switch (action.type) {
    case FL_TYPES.FETCH_FLIGHTS:
      return state;
    case FL_TYPES.SAVE_FLIGHT_REQUEST:
      console.log(action);
      return [...state, action.flight];
    case FL_TYPES.FETCH_BUSINESS_FLIGHTS:
    case FL_TYPES.FETCH_CHEAP_FLIGHTS:
      return [...state, ...action.flight];
    default:
      return state;
  }
};

export const isFetching = (state = false, action) => {
  switch (action.type) {
    case FL_TYPES.FETCH_FLIGHTS_REQUEST:
      return true;
    case FL_TYPES.FETCH_FLIGHTS_SUCCESS:
    case FL_TYPES.FETCH_FLIGHTS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const hasSucceded = (state = false, action) => {
  switch (action.type) {
    case FL_TYPES.SAVE_FLIGHT_SUCCEDED:
      return true;
    case FL_TYPES.SAVE_FLIGHT_REQUEST:
    case FL_TYPES.SAVE_FLIGHT_RESET:
      return false;
    default:
      return state;
  }
};

export const flightsReducer = combineReducers({
  flights,
  isFetching
});

/**
 * Action Creators
 *
 */

export const addNewFlight = data => ({
  type: FL_TYPES.SAVE_FLIGHT_REQUEST,
  flight: data
});

/**
 * SAGAS
 */
// worker sagas
export function* fetchFlights() {
  try {
    yield put({ type: FL_TYPES.FETCH_FLIGHTS_REQUEST });
    yield call(fetchBusinessFlights);
    yield call(fetchCheapFlights);
    yield put({ type: FL_TYPES.FETCH_FLIGHTS_SUCCESS });
  } catch (err) {
    console.error(err);
  }
}

export function* fetchBusinessFlights() {
  try {
    const response = yield call(
      [axios, axios.get],
      CONFIG.BUSINESS_FLIGHTS_ENDPOINT
    );
    const flights = transformBusinessFlight(response.data.data);

    yield put({ type: FL_TYPES.FETCH_BUSINESS_FLIGHTS, flight: flights });
  } catch (err) {
    console.error(err);
  }
}

export function* fetchCheapFlights() {
  try {
    const response = yield call(
      [axios, axios.get],
      CONFIG.CHEAP_FLIGHTS_ENDPOINT
    );
    const flights = transformCheapFlight(response.data.data);

    yield put({ type: FL_TYPES.FETCH_CHEAP_FLIGHTS, flight: flights });
  } catch (err) {
    console.error(err);
  }
}

export function* addNewFlightSaga() {
  try {
    yield call(addNewFlight);
    yield put({ type: FL_TYPES.SAVE_FLIGHT_SUCCEDED });
  } catch (err) {
    console.error(err);
  }
}

// watcher sagas
export function* watchFlightsSaga() {
  yield takeLatest(FL_TYPES.FETCH_FLIGHTS, fetchFlights); // yield call(fetchFlights);
}

export function* watchNewFlightSaga() {
  while (true) {
    yield take(FL_TYPES.SAVE_FLIGHT_REQUEST);
    yield call(addNewFlightSaga);
    yield delay(3000);
    yield put({ type: FL_TYPES.SAVE_FLIGHT_RESET });
  }
}

export function* initSagas() {
  yield all([watchFlightsSaga(), watchNewFlightSaga()]);
}

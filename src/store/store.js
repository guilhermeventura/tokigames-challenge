/**
 * Store Configuration
 *
 * @description Configures the store for our project.
 *              Also applies the necessary enhancers
 *              and middlewares for us.
 */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./ducks/index";

import { initSagas } from "./ducks/flights-duck";
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from "lodash/throttle";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./../helpers/localStorage";

export default function() {
  const persistedState = loadStateFromLocalStorage();

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // mount it on the Store
  const store = createStore(
    reducer,
    persistedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.subscribe(
    throttle(() => {
      saveStateToLocalStorage({
        flightsReducer: store.getState().flightsReducer
      });
    }, 1000)
  );

  // run the initSagas
  sagaMiddleware.run(initSagas);

  // @todo
  store.dispatch({
    type: "@@flights/FETCH_FLIGHTS"
  });

  return store;
}

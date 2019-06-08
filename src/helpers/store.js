/**
 * Store Configuration
 *
 * @description Configures the store for our project.
 *              Also applies the necessary enhancers
 *              and middlewares for us.
 */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  flights as reducer,
  watchFlights as rootSaga
} from "./../store/ducks/flights-duck";
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from "lodash/throttle";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./localStorage";

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
        flights: store.getState().flights
      });
    }, 1000)
  );
  // then run the saga
  sagaMiddleware.run(rootSaga);

  return store;
}

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
  flightList as reducer,
  addNewFlight as mySaga
} from "./../components/flight-list/flight-list-duck";
import { composeWithDevTools } from "redux-devtools-extension";

export default function() {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // mount it on the Store
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // then run the saga
  sagaMiddleware.run(mySaga);

  return store;
}

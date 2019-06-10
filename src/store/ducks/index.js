import { combineReducers } from "redux";
import { flightsReducer, hasSucceded } from "./flights-duck";

import { sortFilter, sortType } from "./sorting-duck";

export default combineReducers({
  flightsReducer,
  sortFilter,
  sortType,
  hasSucceded
});

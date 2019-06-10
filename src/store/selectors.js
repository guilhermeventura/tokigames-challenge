import { orderBy } from "lodash";
import { ST_TYPES } from "./ducks/sorting-constants";

export const getVisibleFlights = (flights, filter) => {
  if (!flights) return;

  switch (filter) {
    case ST_TYPES.SHOW_ALL:
      return flights;
    case ST_TYPES.SHOW_BUSINESS:
      return flights.filter(f => f.category === "business");
    case ST_TYPES.SHOW_CHEAP:
      return flights.filter(f => f.category === "cheap");
    default:
      throw new Error("Unknown filter " + filter);
  }
};

export const sortFlights = (flights, sortType) => {
  if (!flights) return;

  switch (sortType) {
    case ST_TYPES.SORT_ARRIVAL_ASC:
      return orderBy(flights, ["arrival"], ["asc"]);
    case ST_TYPES.SORT_ARRIVAL_DESC:
      return orderBy(flights, ["arrival"], ["desc"]);
    case ST_TYPES.SORT_DEPARTURE_ASC:
      return orderBy(flights, ["arrival"], ["asc"]);
    case ST_TYPES.SORT_DEPARTURE_DESC:
      return orderBy(flights, ["arrival"], ["desc"]);
    case ST_TYPES.SORT_ARRIVALTIME_ASC:
      return orderBy(flights, ["arrivalTime"], ["asc"]);
    case ST_TYPES.SORT_ARRIVALTIME_DESC:
      return orderBy(flights, ["arrivalTime"], ["desc"]);
    case ST_TYPES.SORT_DEPARTURETIME_ASC:
      return orderBy(flights, ["departureTime"], ["asc"]);
    case ST_TYPES.SORT_DEPARTURETIME_DESC:
      return orderBy(flights, ["departureTime"], ["desc"]);
    case ST_TYPES.SORT_CATEGORY_ASC:
      return orderBy(flights, ["category"], ["asc"]);
    case ST_TYPES.SORT_CATEGORY_DESC:
      return orderBy(flights, ["category"], ["desc"]);
    default:
      return flights;
  }
};

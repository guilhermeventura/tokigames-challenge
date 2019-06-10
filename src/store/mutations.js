/**
 * Data Mutations helper
 *
 * @description responsible to 'normalize' the API to a unified Common data
 *              (maybe it should be at /helpers, but i wasn't shure)
 */
import { v4 } from "node-uuid";

export const transformCheapFlight = cheapFlights => {
  if (!cheapFlights) return;

  let normalizedList = [];

  cheapFlights.map((flight, index) => {
    let normalizeAD = flight.route.split("-");

    normalizedList[index] = {
      flightId: v4(),
      departure: normalizeAD[0],
      arrival: normalizeAD[1],
      departureTime: flight.departure,
      arrivalTime: flight.arrival,
      category: "cheap"
    };
  });

  return normalizedList;
};

export const transformBusinessFlight = businessFlights => {
  if (!businessFlights) return;

  let normalizedList = [];

  businessFlights.map((flight, index) => {
    normalizedList[index] = {
      flightId: v4(),
      arrival: flight.arrival,
      departure: flight.departure,
      departureTime: flight.departureTime,
      arrivalTime: flight.arrivalTime,
      category: "business"
    };
  });

  return normalizedList;
};

/**
 * Flight Item View Test Suite
 *
 * @description Describes the test suite for the FlightItemView component
 */

import React from "react";
import { shallow, mount } from "enzyme";
import FlightItemView from "../index";

describe("<FlightItemView />", () => {
  const flightMock = {
    flightId: "f202963b-a1a9-499d-bf7a-7772c9708afb",
    arrival: "Antalya",
    departure: "Ankara",
    departureTime: 1561627856,
    arrivalTime: 1564410656,
    category: "business"
  };

  it("should render without crashing", () => {
    const component = mount(<FlightItemView flightData={flightMock} />);
    expect(component).toMatchSnapshot();
  });

  it("should show a error message if flightData prop is provided", () => {
    const component = mount(<FlightItemView />);
    expect(component.find("p.error")).toHaveLength(1);
  });

  it("should render properly if flightData prop is provided", () => {
    const component = mount(<FlightItemView flightData={flightMock} />);
    expect(component.prop("flightData")).toEqual(flightMock);
  });
});

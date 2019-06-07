/**
 * Flight Item View Test Suite
 *
 * @description Describes the test suite for the FlightItemView component
 */

import React from "react";
import { mount } from "enzyme";
import FlightItemView from "../index";

describe("<FlightItemView />", () => {
  it("should render without crashing", () => {
    const component = mount(<FlightItemView flightData={[0, 1, 2]} />);
    expect(component).toMatchSnapshot();
  });

  it("should display an error message if the component is called without flightData prop", () => {
    const component = mount(<FlightItemView />);
    expect(component.find("p.error")).toHaveLength(1);
  });

  it("should render properly if flightData prop is provided", () => {
    const mockFlight = [
      {
        departure: "Ankara",
        arrival: "Antalya",
        departureTime: 1561627856.0,
        arrivalTime: 1564410656.0
      }
    ];
    const component = mount(<FlightItemView flightData={mockFlight} />);
    expect(component.prop("flightData")).toEqual(mockFlight);
  });
});

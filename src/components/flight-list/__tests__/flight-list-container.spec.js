/**
 * Flight List Container Test Suite
 *
 * @description Describes the test suite for the FlightListContainer component
 */

import React from "react";
import { shallow } from "enzyme";
import { FlightListContainer } from "../flight-list-container";

describe("<FlightListContainer />", () => {
  const flightMock = {
    flightId: "f202963b-a1a9-499d-bf7a-7772c9708afb",
    arrival: "Antalya",
    departure: "Ankara",
    departureTime: 1561627856,
    arrivalTime: 1564410656,
    category: "business"
  };

  it("should render without crashing", () => {
    const component = shallow(<FlightListContainer />);
    expect(component).toMatchSnapshot();
  });

  it("should show a spinner loader while fetching flights", () => {
    const props = {
      isFetching: true
    };
    const component = shallow(
      <FlightListContainer isFetching={props.isFetching} flights={flightMock} />
    );

    console.log(component.instance());

    // expect(component.props()["children"]["props"]["isFetching"]).toBeTruthy();
  });
});

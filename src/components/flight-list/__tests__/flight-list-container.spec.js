/**
 * Flight List Container Test Suite
 *
 * @description Describes the test suite for the FlightListContainer component
 */

import React from "react";
import { shallow } from "enzyme";
import FlightListContainer from "../index";

describe("<FlightListContainer />", () => {
  it("should render without crashing", () => {
    const component = shallow(<FlightListContainer />);
    expect(component).toMatchSnapshot();
  });
});

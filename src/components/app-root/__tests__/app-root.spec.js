/**
 * App Root Test Suite
 *
 * @description Describes the test suite for the AppRoot component
 */

import React from "react";
import { shallow } from "enzyme";
import AppRoot from "../index";

describe("<AppRoot />", () => {
  it("should render without crashing", () => {
    const component = shallow(<AppRoot />);

    expect(component).toMatchSnapshot();
  });
});

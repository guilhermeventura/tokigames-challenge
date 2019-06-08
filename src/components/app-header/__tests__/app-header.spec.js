/**
 * App Header Test Suite
 *
 * @description Describes the test suite for the AppHeader component
 */

import React from "react";
import { shallow } from "enzyme";
import AppHeader from "../index";

describe("<AppHeader />", () => {
  it("should render without crashing", () => {
    const component = shallow(<AppHeader />);

    expect(component).toMatchSnapshot();
  });
});

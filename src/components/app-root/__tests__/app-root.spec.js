/**
 * App Root Test Suite
 *
 * @description Describes the test suite for the AppRoot component
 */

import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import AppRoot from "../index";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<AppRoot />", () => {
  it("should render without crashing", () => {
    const component = shallow(<AppRoot store={store} />);

    expect(component).toMatchSnapshot();
  });
});

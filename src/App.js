/**
 * The UI Entry Component
 *
 * @description Assemble the components to build our UI
 */
import React from "react";

import Container from "@material-ui/core/Container";

import AppHeaderView from "./components/app-header";
import FlightListContainer from "./components/flight-list";

function App() {
  return (
    <React.Fragment>
      <AppHeaderView />
      <Container fixed>
        <FlightListContainer />
      </Container>
    </React.Fragment>
  );
}

export default App;

/**
 * APP entry point.
 */
import React from "react";

import Container from "@material-ui/core/Container";

import AppHeaderView from "./components/app-header";
import FlightListContainer from "./components/flight-list";

function App() {
  return (
    <Container maxWidth={"xl"}>
      <AppHeaderView />
      <FlightListContainer />
    </Container>
  );
}

export default App;

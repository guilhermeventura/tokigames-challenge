/**
 * FlightItem View Component.
 *
 * @description The Basic FlightItem component, totaly statleless
 * @param {flightData} object
 *
 */
import React from "react";
import PropTypes from "prop-types";

const FlightItemView = ({ flightData }) => {
  return (
    <div>
      {!flightData && <p className="error">Oops, something wrong happened.</p>}
    </div>
  );
};

FlightItemView.propTypes = {
  flightData: PropTypes.array.isRequired
};

export default FlightItemView;

/**
 * FlightItem View Component.
 *
 * @description The Basic FlightItem component, totaly statleless
 * @param {flightData} object
 *
 */
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});

const FlightItemView = ({ flightData }) => {
  const classes = useStyles();

  return (
    <div>
      {!flightData ? (
        <p className="error">Oops, something wrong happened.</p>
      ) : (
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom>
              <Icon>flight_takeoff</Icon>
              {flightData.departure}
              <Icon>flight_land</Icon>
              {flightData.arrival}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

FlightItemView.propTypes = {
  flightData: PropTypes.object.isRequired
};

export default FlightItemView;

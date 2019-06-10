/**
 * FlightItem View Component.
 *
 * @description The Basic FlightItem component, totaly statleless
 * @param {flightData} object
 *
 */
import React from "react";
import PropTypes from "prop-types";

import dayjs from "dayjs";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 14,
    verticalAlign: "middle"
  },
  card: {
    // minWidth: 275
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  iconTitle: {
    verticalAlign: "top",
    marginRight: theme.spacing(1)
  },
  cardIcon: {
    fontSize: "14px",
    justifySelf: "flex-end"
  },
  vaM: {
    verticalAlign: "middle"
  }
}));

export const FlightItemView = ({ flightData }) => {
  const classes = useStyles();

  const renderCategoryIcon = category => {
    return (
      <Tooltip
        title={category === "cheap" ? "Cheap Flight" : "Business Flight"}
        placement="left">
        <Icon className={classes.cardIcon} fontSize="small">
          {category === "cheap" ? "person" : "work"}
        </Icon>
      </Tooltip>
    );
  };

  return (
    <div>
      {!flightData ? (
        <p className="error">Oops, something wrong happened.</p>
      ) : (
        <Card square={true} className={classes.card}>
          <CardContent>
            <Grid
              container
              alignItems="center"
              justify="flex-end"
              className="flight-item__header">
              <Grid className={classes.cardIcon} item md={1}>
                {renderCategoryIcon(flightData.category)}
              </Grid>
            </Grid>
            <Grid container alignItems="center" className="flight-item__header">
              <Grid item md={2}>
                <Icon className={classes.iconTitle}>flight_takeoff</Icon>
              </Grid>
              <Grid item md={10}>
                <Typography variant="h5">
                  <p className={classes.title}>from</p>
                  {flightData.departure}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Icon className={classes.iconTitle}>flight_land</Icon>
              </Grid>
              <Grid item md={10}>
                <Typography variant="h5">
                  <p className={classes.title}>to</p>
                  {flightData.arrival}
                </Typography>
              </Grid>
            </Grid>

            <Divider className={classes.divider} />

            <div className="flight-item__">
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom>
                <Icon className={classes.vaM}>schedule</Icon> departure -{" "}
                {dayjs(flightData.departureTime).format(
                  "MM/DD/YYYY [-] HH:mm:ss"
                )}
              </Typography>
            </div>

            <div className="flight-item__">
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom>
                <Icon className={classes.vaM}>schedule</Icon> arrival -{" "}
                {dayjs(flightData.arrivalTime).format(
                  "MM/DD/YYYY [-] HH:mm:ss"
                )}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

FlightItemView.propTypes = {
  flightData: PropTypes.shape({
    arrival: PropTypes.string,
    departure: PropTypes.string,
    departureTime: PropTypes.number,
    arrivalTime: PropTypes.number,
    category: PropTypes.string
  })
};

export default FlightItemView;

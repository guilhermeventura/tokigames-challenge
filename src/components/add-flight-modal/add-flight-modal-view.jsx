import React from "react";
import { connect } from "react-redux";
import { v4 } from "node-uuid";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import useForm from "./../../helpers/formHandlerHooks";

import { addNewFlight } from "./../../store/ducks/flights-duck";

const AddFlightModalView = props => {
  const { fullScreen } = props;
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const [error, setError] = React.useState({
    category: false,
    arrival: false,
    departure: false,
    arrivalTime: false,
    departureTime: false
  });

  const handleErrors = field => {};

  const register = () => {
    let hasError = false;
    setError({
      category: false,
      arrival: false,
      departure: false,
      arrivalTime: false,
      departureTime: false
    });
    if (inputs.category === "") {
      setError({
        ...error,
        category: true
      });
      hasError = true;
    }
    if (inputs.arrival === "") {
      setError({
        ...error,
        arrival: true
      });
      hasError = true;
    }
    if (inputs.departure === "") {
      setError({
        ...error,
        departure: true
      });
      hasError = true;
    }
    if (inputs.arrivalTime === "") {
      setError({
        ...error,
        arrivalTime: true
      });
      hasError = true;
    }
    if (inputs.departureTime === "") {
      setError({
        ...error,
        departureTime: true
      });
      hasError = true;
    }

    if (!hasError) {
      const flight = {
        flightId: v4(),
        arrival: inputs.arrival,
        departure: inputs.departure,
        arrivalTime: new Date(inputs.arrivalTime).getTime(),
        departureTime: new Date(inputs.departureTime).getTime(),
        category: inputs.category
      };

      props.addNewFlight(flight);
      handleClose();
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      category: "",
      arrival: "",
      departure: "",
      arrivalTime: "",
      departureTime: ""
    },
    register
  );

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleClickOpen}>
        Add new
        <Icon>add</Icon>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Flight</DialogTitle>
        <DialogContent>
          {props.hasSucceded ? (
            <Grid item align="center">
              <CircularProgress size={80} />
              <Typography variant="subtitle1">
                Processing, please wait...
              </Typography>
            </Grid>
          ) : (
            <React.Fragment>
              <DialogContentText>
                Please fill the fields below to create a new flight on our
                database
              </DialogContentText>
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Flight Type</InputLabel>
                    <Select
                      autoFocus
                      error={error.category}
                      value={inputs.category}
                      onChange={handleInputChange}
                      inputProps={{
                        name: "category",
                        id: "category"
                      }}>
                      <MenuItem value="">
                        <em>Chosse One</em>
                      </MenuItem>
                      <MenuItem value={"cheap"}>Cheap</MenuItem>
                      <MenuItem value={"business"}>Business</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    error={error.departure}
                    margin="dense"
                    label="Departure"
                    type="text"
                    required
                    inputProps={{
                      name: "departure",
                      id: "departure"
                    }}
                    value={inputs.departure}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    error={error.arrival}
                    margin="dense"
                    label="Arrival"
                    type="text"
                    required
                    inputProps={{
                      name: "arrival",
                      id: "arrival"
                    }}
                    value={inputs.arrival}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    error={error.departureTime}
                    type="datetime-local"
                    label="Departure Time"
                    required
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      name: "departureTime",
                      id: "departureTime"
                    }}
                    value={inputs.departureTime}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    error={error.arrivalTime}
                    type="datetime-local"
                    label="Arrival Time"
                    required
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      name: "arrivalTime",
                      id: "arrivalTime"
                    }}
                    value={inputs.arrivalTime}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: state.flightsReducer.isFetching,
  hasSucceded: state.hasSucceded
});

const mapDispatchToProps = dispatch => {
  return {
    addNewFlight: flight => dispatch(addNewFlight(flight))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFlightModalView);

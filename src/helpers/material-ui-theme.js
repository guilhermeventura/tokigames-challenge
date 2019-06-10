/**
 * MaterialUI Theming file
 *
 * @description Creates the UI Theme for the application components
 */
import { createMuiTheme } from "@material-ui/core/styles";

export const tokiTheme = createMuiTheme({
  palette: {
    primary: { main: "#0b2b51" },
    secondary: { main: "#faac18" }
  },
  typography: {
    fontFamily: "DINOT-Regular, Roboto, sans-serif",
    button: { fontFamily: "DINOT-Bold, Roboto, sans-serif" },
    h1: { fontFamily: "DINOT-Bold, Roboto, sans-serif" },
    h2: { fontFamily: "DINOT-Bold, Roboto, sans-serif" },
    h3: { fontFamily: "DINOT-Bold, Roboto, sans-serif" },
    h4: { fontFamily: "DINOT-Bold, Roboto, sans-serif" },
    h5: { fontFamily: "DINOT-Bold, Roboto, sans-serif" },
    h6: { fontFamily: "DINOT-Bold, Roboto, sans-serif" }
  }
});

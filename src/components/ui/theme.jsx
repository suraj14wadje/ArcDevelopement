const { createMuiTheme } = require("@material-ui/core");

const blue = "#0B72B9";
const orange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue,
      orange,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: orange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 700,
    },
    estimateButton: {
      borderRadius: "25px",
      height: "45px",
      fontFamily: "Pacifico",
      color: "red",
      textTransform: "none",
    },
  },
});

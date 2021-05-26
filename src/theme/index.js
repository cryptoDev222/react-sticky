import { createMuiTheme, colors } from "@material-ui/core";
// import shadows from './shadows'
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.cyan[200],
      main: colors.cyan[500],
      dark: colors.cyan[700],
      contrastText: "#fff",
    },
    secondary: {
      light: colors.green[200],
      main: colors.green[500],
      dark: colors.green[700],
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
  },
  typography: typography,
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
          width: "100%",
        },
        a: {
          color: colors.cyan[500],
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
      },
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

export default theme;

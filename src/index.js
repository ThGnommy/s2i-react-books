import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BookProvider } from "./BookProvider";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffea00",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

theme.typography.h2 = {
  "@media (max-width:427px)": {
    letterSpacing: "0.5rem!important",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

ReactDOM.render(
  <BookProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BookProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

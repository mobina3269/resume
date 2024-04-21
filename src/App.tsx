import React, { Fragment, useState } from "react";
import Router from "./routes/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

function App() {
  
  return (
    <Fragment>
      <ThemeProvider theme={createTheme()}>
        <Router />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

import React, { useState, useContext } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Searchbar } from "./components/Searchbar";
import { Book } from "./components/Book";
import { ButtonSearch } from "./components/ButtonSearch";
import "./App.css";
import "fontsource-roboto";

const App = () => {
  return (
    <>
      <Container>
        <Grid item xs={12} alignItems="center" justify="center" container>
          <Typography variant="h2">Book Finder</Typography>
        </Grid>
        <Grid xs={12} alignItems="center" justify="center" item>
          <Searchbar />
        </Grid>
        <Grid xs={12} alignItems="center" justify="center" item>
          <ButtonSearch />
        </Grid>
        <Grid xs={3} alignItems="center" justify="center" item>
          <Book />
        </Grid>
      </Container>
    </>
  );
};

export default App;

import React, { useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@material-ui/core";
import { Searchbar } from "../../components/Searchbar";
import { makeStyles } from "@material-ui/core/styles";
import { BookList } from "../../components/BookList";
import { ButtonSearch } from "../../components/ButtonSearch";
import { BookContext } from "../../BookProvider";

import "../../App.css";

export const SearchPage = () => {
  const useStyles = makeStyles((theme) => ({
    grid: {
      padding: theme.spacing(3),
    },
    searchBar: {
      padding: theme.spacing(3),
    },
    buttonSearch: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    appBar: {
      padding: "1rem",
      margin: "1rem",
      alignItems: "center",
    },
    title: {
      fontWeight: 400,
      letterSpacing: "1rem",
      fontStyle: "italic",
      color: "#fff",
    },
    loader: {
      width: "50px",
      height: "50px",
    },
  }));

  const classes = useStyles();
  const { loader } = useContext(BookContext);
  const [loaderValue, setLoaderValue] = loader;

  return (
    <>
      <Container>
        <Grid justify="center" alignItems="center" container>
          <AppBar className={classes.appBar} position="relative">
            <Toolbar>
              <Typography className={classes.title} variant="h2">
                BOOK FINDER
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid
          className={classes.searchBar}
          container
          justify="center"
          alignItems="center"
        >
          <Searchbar />
        </Grid>
        <Grid
          className={classes.buttonSearch}
          container
          justify="center"
          alignItems="center"
        >
          <ButtonSearch />
        </Grid>
        <Grid container justify="center" alignItems="center">
          {loaderValue ? (
            <>
              <CircularProgress className={classes.loader} />
            </>
          ) : (
            <BookList />
          )}
        </Grid>
      </Container>
    </>
  );
};

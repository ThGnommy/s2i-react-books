import React, { useContext, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  CircularProgress,
  FormControlLabel,
  Switch,
  Fab,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ArrowUpward } from "@material-ui/icons";
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
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    buttonSearch: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    freeEbook: {
      padding: theme.spacing(3),
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
  const fabOnlyMobile = useMediaQuery("(max-width:600px)");

  const { loader } = useContext(BookContext);
  const [loaderValue, setLoaderValue] = loader;

  const { freeEbook } = useContext(BookContext);
  const [freeEbookValue, setFreeEbookValue] = freeEbook;

  const [checked, setChecked] = useState(false);

  const handleSwitchFreeEbook = () => {
    setChecked(!checked);

    if (checked !== true) {
      setFreeEbookValue("filter=free-ebooks");
    } else {
      setFreeEbookValue("");
    }
  };

  const handleFabArrow = () => {
    const element = document.querySelector("#container");
    element.scrollIntoView();
  };

  return (
    <>
      <Container id="container">
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
          direction="column"
        >
          <Searchbar />
          <FormControlLabel
            className={classes.freeEbook}
            control={
              <Switch
                checked={checked}
                onChange={handleSwitchFreeEbook}
                name="FreeEbook"
                color="primary"
              />
            }
            label="Only free-ebook"
          />
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
        {fabOnlyMobile && (
          <>
            <Fab
              onClick={handleFabArrow}
              className={classes.fab}
              color="secondary"
              aria-label="go-top"
            >
              <ArrowUpward />
            </Fab>
          </>
        )}
      </Container>
    </>
  );
};

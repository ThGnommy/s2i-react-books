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
import { searchPageStyles } from "../../styles";
import { BookList } from "../../components/BookList";
import { ButtonSearch } from "../../components/ButtonSearch";
import { BookContext } from "../../BookProvider";
import ScrollToTop from "../../components/ScrollToTop";
import "../../App.css";

export const SearchPage = () => {
  const classes = searchPageStyles();

  const fabOnlyMobile = useMediaQuery("(max-width:600px)");

  const { loader, dispatchFreeEbook } = useContext(BookContext);

  const [checked, setChecked] = useState(false);

  const handleSwitchFreeEbook = () => {
    setChecked(!checked);

    if (checked !== true) {
      dispatchFreeEbook({
        type: "SET_FREE_BOOK_ON",
      });
    } else {
      dispatchFreeEbook({
        type: "SET_FREE_BOOK_OFF",
      });
    }
  };

  const handleFabArrow = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container id="container">
        <ScrollToTop />
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
          {loader ? (
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

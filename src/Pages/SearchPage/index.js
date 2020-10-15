import React, { useState } from "react";
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
import ScrollToTop from "../../components/ScrollToTop";
import "../../App.css";
import { setFreeEbookOn, setFreeEbookOff } from "../../redux/book/actions";
import { useSelector, useDispatch } from "react-redux";

export const SearchPage = () => {
  const classes = searchPageStyles();

  const fabOnlyMobile = useMediaQuery("(max-width:600px)");

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const loaderRedux = useSelector((state) => state.reducerLoader);

  const handleSwitchFreeEbook = () => {
    setChecked(!checked);

    if (checked !== true) {
      dispatch(setFreeEbookOn());
    } else {
      dispatch(setFreeEbookOff());
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
          {loaderRedux ? (
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

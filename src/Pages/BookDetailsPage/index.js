import React from "react";
import {
  Button,
  CardMedia,
  Card,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Fab,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Rating from "@material-ui/lab/Rating";
import { bookDetailsPageStyles } from "../../styles";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import { useSelector } from "react-redux";

export const BookDetailsPage = () => {
  const classes = bookDetailsPageStyles();

  const selectedBookValueRedux = useSelector(
    (state) => state.reducerSelectedBook
  );

  return (
    <>
      <Container>
        <ScrollToTop />
        <Grid justify="center" alignItems="center" container>
          <AppBar className={classes.appBar} position="relative">
            <Toolbar>
              <Typography className={classes.title} variant="h2">
                {selectedBookValueRedux.title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Typography variant="h4">
            {selectedBookValueRedux.subtitle}
          </Typography>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`https://books.google.com/books/content?id=${selectedBookValueRedux.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`}
            />
          </Card>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValueRedux.description !== undefined ? (
            <>
              <Accordion color="primary">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.description}>
                    Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.text}>
                    {selectedBookValueRedux.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>
          ) : null}
        </Grid>

        <Grid justify="center" alignItems="center" container>
          {selectedBookValueRedux.authors !== undefined ? (
            <>
              <Typography className={classes.text}>
                Authors: {selectedBookValueRedux.authors}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValueRedux.publisher !== undefined ? (
            <>
              <Typography className={classes.text}>
                Publisher: {selectedBookValueRedux.publisher}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValueRedux.publisherDate !== undefined ? (
            <>
              <Typography className={classes.text}>
                Publisher Date: {selectedBookValueRedux.publisherDate}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValueRedux.rating !== undefined ? (
            <>
              <Typography className={classes.text}>Rating</Typography>
              <Rating
                name="read-only"
                value={selectedBookValueRedux.rating}
                readOnly
                size="large"
              />
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            href={selectedBookValueRedux.previewLink}
            size="large"
          >
            Book Preview
          </Button>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Link className={classes.link} to="/">
            <Fab className={classes.fab} color="secondary" variant="extended">
              <KeyboardBackspaceIcon className={classes.fabIcon} />
              Back
            </Fab>
          </Link>
        </Grid>
      </Container>
    </>
  );
};

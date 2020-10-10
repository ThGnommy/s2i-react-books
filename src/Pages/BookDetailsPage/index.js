import React, { useContext } from "react";
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
import { BookContext } from "../../BookProvider";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

export const BookDetailsPage = () => {
  const { selectedBook } = useContext(BookContext);

  const classes = bookDetailsPageStyles();

  return (
    <>
      <Container>
        <ScrollToTop />

        <Grid justify="center" alignItems="center" container>
          <AppBar className={classes.appBar} position="relative">
            <Toolbar>
              <Typography className={classes.title} variant="h2">
                {selectedBook.title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Typography variant="h4">{selectedBook.subtitle}</Typography>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`https://books.google.com/books/content?id=${selectedBook.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`}
            />
          </Card>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBook.description !== undefined ? (
            <>
              <Accordion color="primary">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.description}>
                    Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.text}>
                    {selectedBook.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>
          ) : null}
        </Grid>

        <Grid justify="center" alignItems="center" container>
          {selectedBook.authors !== undefined ? (
            <>
              <Typography className={classes.text}>
                Authors: {selectedBook.authors}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBook.publisher !== undefined ? (
            <>
              <Typography className={classes.text}>
                Publisher: {selectedBook.publisher}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBook.publisherDate !== undefined ? (
            <>
              <Typography className={classes.text}>
                Publisher Date: {selectedBook.publisherDate}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBook.rating !== undefined ? (
            <>
              <Typography className={classes.text}>Rating</Typography>
              <Rating
                name="read-only"
                value={selectedBook.rating}
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
            href={selectedBook.previewLink}
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

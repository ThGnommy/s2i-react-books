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
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { BookContext } from "../../BookProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  card: {
    margin: "3rem",
  },
  media: {
    height: 500,
    width: 300,
    backgroundSize: "cover",
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
  link: {
    textDecoration: "none",
    marginTop: "1rem",
  },
  text: {
    fontSize: "1.5rem",
    margin: "1rem 0",
  },
  description: {
    fontSize: "1.5rem",
    margin: "0.5rem 0",
    fontStyle: "italic",
  },
  button: {
    margin: "1rem 0",
  },
});

export const BookDetailsPage = () => {
  const { selectedBook } = useContext(BookContext);
  const [selectedBookValue, setSelectedBookValue] = selectedBook;
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid justify="center" alignItems="center" container>
          <AppBar className={classes.appBar} position="relative">
            <Toolbar>
              <Typography className={classes.title} variant="h2">
                {selectedBookValue.title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Typography variant="h4">{selectedBookValue.subtitle}</Typography>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`http://books.google.com/books/content?id=${selectedBookValue.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`}
            />
          </Card>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValue.description !== undefined ? (
            <>
              <Accordion color="primary">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.description}>
                    Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.text}>
                    {selectedBookValue.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>
          ) : null}
        </Grid>

        <Grid justify="center" alignItems="center" container>
          {selectedBookValue.authors !== undefined ? (
            <>
              <Typography className={classes.text}>
                Authors: {selectedBookValue.authors}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValue.publisher !== undefined ? (
            <>
              <Typography className={classes.text}>
                Publisher: {selectedBookValue.publisher}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValue.publisherDate !== undefined ? (
            <>
              <Typography className={classes.text}>
                Publisher Date: {selectedBookValue.publisherDate}
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid justify="center" alignItems="center" container>
          {selectedBookValue.rating !== undefined ? (
            <>
              <Typography className={classes.text}>Rating</Typography>
              <Rating
                name="read-only"
                value={selectedBookValue.rating}
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
            href={selectedBookValue.previewLink}
            size="large"
          >
            Book Preview
          </Button>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Link className={classes.link} to="/">
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Container>
    </>
  );
};

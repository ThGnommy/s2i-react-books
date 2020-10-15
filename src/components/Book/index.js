import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { BookContext, handleIfPropsUndefined } from "../../BookProvider";
import { bookStyles } from "../../styles";
import bookPropTypes from "../../propTypes/bookPropTypes";
import { useSelector } from "react-redux";

export const Book = ({
  title,
  id,
  author,
  subtitle,
  description,
  publisher,
  publisherDate,
  rating,
  previewLink,
}) => {
  const classes = bookStyles();

  const bookListRedux = useSelector((state) => state.reducerBook);

  const { bookList } = useContext(BookContext);
  // eslint-disable-next-line
  const [bookListValue, setBookListValue] = bookList;

  const { selectedBook } = useContext(BookContext);
  // eslint-disable-next-line
  const [selectedBookValue, setSelectedBookValue] = selectedBook;

  const getCurrentBookDetails = () => {
    setSelectedBookValue({
      title: handleIfPropsUndefined(title),
      id: handleIfPropsUndefined(id),
      authors: handleIfPropsUndefined(author),
      subtitle: handleIfPropsUndefined(subtitle),
      publisher: handleIfPropsUndefined(publisher),
      description: handleIfPropsUndefined(description),
      publisherDate: handleIfPropsUndefined(publisherDate),
      rating: handleIfPropsUndefined(rating),
      previewLink: handleIfPropsUndefined(previewLink),
    });
  };

  return (
    <>
      <Grid xs={12} md={6} lg={3} className={classes.root} item>
        <Card>
          <CardMedia
            image={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`}
            className={classes.imageBook}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom component="h6">
              {author}
            </Typography>
            <Typography gutterBottom component="h6">
              {publisherDate}
            </Typography>
          </CardContent>
          <CardActions className={classes.button}>
            <Link
              to={`/book/${title.replace(/\s/g, "")}`}
              onClick={getCurrentBookDetails}
              className={classes.link}
              state={bookListRedux}
            >
              <Button size="small" color="primary">
                More Info
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

Book.propTypes = bookPropTypes;

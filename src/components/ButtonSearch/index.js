import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { BookContext } from "../../BookProvider";
import axios from "axios";

export const ButtonSearch = () => {
  const { query } = useContext(BookContext);
  const [queryValue, setqueryValue] = query;

  const { bookList } = useContext(BookContext);
  const [bookListValue, setBookListValue] = bookList;

  const { loader } = useContext(BookContext);
  const [loaderValue, setLoaderValue] = loader;

  const { freeEbook } = useContext(BookContext);
  const [freeEbookValue, setFreeEbookValue] = freeEbook;

  const handleButtonClick = () => {
    if (queryValue !== "") {
      fetchData();
    } else {
      return;
    }
    setqueryValue("");
  };

  const fetchData = () => {
    setLoaderValue(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${queryValue}&key=${process.env.REACT_APP_API_KEY}&printType=books&maxResults=20&${freeEbookValue}`
      )
      .then((response) => {
        console.log(response.data.items);
        response.data.items.length > 0
          ? setBookListValue(response.data.items)
          : setBookListValue([]);
        setLoaderValue(false);
      })
      .catch((error) => {
        console.log("The error: " + error);
      });
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleButtonClick}>
        Search
      </Button>
    </>
  );
};

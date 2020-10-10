import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { BookContext } from "../../BookProvider";
import axios from "axios";

export const ButtonSearch = () => {
  const {
    query,
    freeEbook,
    dispatchLoader,
    dispatchBookList,
    dispatchQuery,
  } = useContext(BookContext);

  const handleButtonClick = () => {
    if (query !== "") {
      fetchData();
    } else {
      return;
    }
    dispatchQuery({ type: "RESET_QUERY" });
  };

  const fetchData = () => {
    dispatchLoader({ type: "SHOW_LOADER" });
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}&printType=books&maxResults=20&${freeEbook}`
      )
      .then((response) => {
        console.log(response.data.items);
        response.data.items.length > 0
          ? dispatchBookList({
              type: "FETCH_BOOKS",
              payload: response.data.items,
            })
          : dispatchBookList({ type: "FETCH_BOOKS", payload: [] });
        dispatchLoader({ type: "HIDE_LOADER" });
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

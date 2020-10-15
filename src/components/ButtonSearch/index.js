import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { BookContext } from "../../BookProvider";
import axios from "axios";
import { showLoader, hideLoader } from "../../redux/loader/actions";
import { getBookList, resetBookList } from "../../redux/book/actions";
import { useDispatch, useSelector } from "react-redux";
import { resetQuery } from "../../redux/book/actions";

export const ButtonSearch = () => {
  const {
    query,
    bookList: [bookListValue, setBookListValue],
    loader: [loaderValue, setLoaderValue],
    freeEbook: [freeEbookValue, setFreeEbookValue],
  } = useContext(BookContext);
  const [queryValue, setqueryValue] = query;

  const dispatch = useDispatch();
  const queryRedux = useSelector((state) => state.reducerQuery);

  const handleButtonClick = () => {
    if (queryRedux !== "") {
      fetchData();
    } else {
      return;
    }
    dispatch(resetQuery());
  };

  const fetchData = () => {
    // setLoaderValue(true);
    dispatch(showLoader());
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${queryRedux}&key=${process.env.REACT_APP_API_KEY}&printType=books&maxResults=20&${freeEbookValue}`
      )
      .then((response) => {
        // console.log(response.data.items);
        response.data.items.length > 0
          ? dispatch(getBookList(response.data.items))
          : dispatch(resetBookList([]));
        dispatch(hideLoader());
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

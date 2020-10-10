import React, { createContext, useReducer } from "react";
import {
  bookListReducer,
  selectedBookReducer,
  queryReducer,
  loaderReducer,
  freeEbookReducer,
} from "./reducers/bookReducer";

export const BookContext = createContext();

export const handleIfPropsUndefined = (value) => {
  return typeof value === undefined ? "" : value;
};

export const BookProvider = (props) => {
  const [query, dispatchQuery] = useReducer(queryReducer, "");

  const [loader, dispatchLoader] = useReducer(loaderReducer, false);

  const [freeEbook, dispatchFreeEbook] = useReducer(freeEbookReducer, "");

  const [bookList, dispatchBookList] = useReducer(bookListReducer, []);

  const [selectedBook, dispatchSelectedBook] = useReducer(
    selectedBookReducer,
    {}
  );

  return (
    <BookContext.Provider
      value={{
        query,
        loader,
        freeEbook,
        bookList,
        selectedBook,
        dispatchQuery,
        dispatchFreeEbook,
        dispatchLoader,
        dispatchBookList,
        dispatchSelectedBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

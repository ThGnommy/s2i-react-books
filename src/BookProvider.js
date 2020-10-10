import React, { useState, createContext, useReducer } from "react";
import { bookReducer, selectedBookReducer } from "./reducers/bookReducer";

export const BookContext = createContext();

export const handleIfPropsUndefined = (value) => {
  return typeof value === undefined ? "" : value;
};

export const BookProvider = (props) => {
  const [query, setQuery] = useState("");

  const [bookList, dispatchBookList] = useReducer(bookReducer, []);
  const [selectedBook, dispatchSelectedBook] = useReducer(
    selectedBookReducer,
    {}
  );

  const [loader, setLoader] = useState(false);
  const [freeEbook, setFreeEbook] = useState("");
  return (
    <BookContext.Provider
      value={{
        query: [query, setQuery],
        loader: [loader, setLoader],
        freeEbook: [freeEbook, setFreeEbook],
        bookList,
        selectedBook,
        dispatchBookList,
        dispatchSelectedBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

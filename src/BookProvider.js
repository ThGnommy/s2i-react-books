import React, { useState, createContext, useReducer } from "react";
import { bookReducer } from "./reducers/bookReducer";

export const BookContext = createContext();

export const handleIfPropsUndefined = (value) => {
  return typeof value === undefined ? "" : value;
};



export const BookProvider = (props) => {
  const [query, setQuery] = useState("");
  
  const [bookList, dispatch] = useReducer(bookReducer, []);

  const [loader, setLoader] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [freeEbook, setFreeEbook] = useState("");
  return (
    <BookContext.Provider
      value={{
        query: [query, setQuery],
        selectedBook: [selectedBook, setSelectedBook],
        loader: [loader, setLoader],
        freeEbook: [freeEbook, setFreeEbook],
        bookList,
        dispatch
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

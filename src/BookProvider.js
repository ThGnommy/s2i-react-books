import React, { useState, createContext } from "react";

export const BookContext = createContext();

export const handleIfPropsUndefined = (value) => {
  return typeof value === undefined ? "" : value;
};

export const BookProvider = (props) => {
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [freeEbook, setFreeEbook] = useState("");
  return (
    <BookContext.Provider
      value={{
        query: [query, setQuery],
        bookList: [bookList, setBookList],
        selectedBook: [selectedBook, setSelectedBook],
        loader: [loader, setLoader],
        freeEbook: [freeEbook, setFreeEbook],
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

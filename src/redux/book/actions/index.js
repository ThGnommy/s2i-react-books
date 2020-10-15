import {
  GET_BOOK_LIST,
  RESET_BOOK_LIST,
  RESET_QUERY,
  SET_QUERY,
} from "./../types";

export const getBookList = (bookArray) => {
  return { type: GET_BOOK_LIST, payload: bookArray };
};

export const resetBookList = (bookArray) => {
  return { type: RESET_BOOK_LIST, payload: bookArray };
};

export const setQuery = (string) => {
  return { type: SET_QUERY, payload: string };
};

export const resetQuery = () => {
  return { type: RESET_QUERY, payload: "" };
};

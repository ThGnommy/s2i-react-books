import {
  GET_BOOK_LIST,
  RESET_BOOK_LIST,
  RESET_QUERY,
  SET_QUERY,
  GET_SELECTED_BOOK_VALUES,
  SET_FREEBOOK_ON,
  SET_FREEBOOK_OFF,
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

export const getSelectedBook = (values) => {
  return { type: GET_SELECTED_BOOK_VALUES, payload: values };
};

export const setFreeEbookOn = () => {
  return { type: SET_FREEBOOK_ON, payload: "filter=free-ebooks" };
};

export const setFreeEbookOff = () => {
  return { type: SET_FREEBOOK_OFF, payload: "" };
};

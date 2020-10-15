import { GET_BOOK_LIST, RESET_BOOK_LIST } from "./../types";

export const reducerBook = (prevState = [], action) => {
  switch (action.type) {
    case GET_BOOK_LIST:
      return action.payload;
    case RESET_BOOK_LIST:
      return action.payload;
    default:
      return prevState;
  }
};

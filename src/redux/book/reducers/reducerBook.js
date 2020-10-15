import {
  GET_BOOK_LIST,
  RESET_BOOK_LIST,
  GET_SELECTED_BOOK_VALUES,
  SET_FREEBOOK_ON,
  SET_FREEBOOK_OFF,
} from "./../types";

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

export const reducerSelectedBook = (prevState = {}, action) => {
  switch (action.type) {
    case GET_SELECTED_BOOK_VALUES:
      return action.payload;
    default:
      return prevState;
  }
};

export const reducerFreeEbook = (prevState = "", action) => {
  switch (action.type) {
    case SET_FREEBOOK_ON:
      return action.payload;
    case SET_FREEBOOK_OFF:
      return action.payload;
    default:
      return prevState;
  }
};

import { SET_QUERY, RESET_QUERY } from "./../types";

export const reducerQuery = (prevState = "", action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.payload;
    case RESET_QUERY:
      return action.payload;
    default:
      return prevState;
  }
};

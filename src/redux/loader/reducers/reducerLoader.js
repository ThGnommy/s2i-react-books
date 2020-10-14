import { SHOW_LOADER, HIDE_LOADER } from "../types";

export const reducerLoader = (prevState = false, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return action.payload;
    case HIDE_LOADER:
      return action.payload;
    default:
      return prevState;
  }
};

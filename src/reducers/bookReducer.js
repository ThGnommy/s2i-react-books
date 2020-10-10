export const bookListReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return action.payload;
    default:
      return state;
  }
};

export const selectedBookReducer = (state, action) => {
  switch (action.type) {
    case "GET_SELECTED_BOOK":
      return action.payload;
    default:
      return state;
  }
};

export const queryReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return action.payload;
    case "RESET_QUERY":
      return "";
    default:
      return state;
  }
};

export const loaderReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return true;
    case "HIDE_LOADER":
      return false;
    default:
      return state;
  }
};

export const freeEbookReducer = (state, action) => {
  switch (action.type) {
    case "SET_FREE_BOOK_ON":
      return "filter=free-ebooks";
    case "SET_FREE_BOOK_OFF":
      return "";
    default:
      return state;
  }
};

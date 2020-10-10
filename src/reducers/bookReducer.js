export const bookReducer = (state, action) => {
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

import { createStore } from "redux";
import { reducerLoader } from "./loader/reducers/reducerLoader";
import { reducerBook } from "./book/reducers/reducerBook";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducerLoader,
  reducerBook,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

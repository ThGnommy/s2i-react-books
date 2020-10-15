import { createStore } from "redux";
import { reducerLoader } from "./loader/reducers/reducerLoader";
import {
  reducerBook,
  reducerSelectedBook,
  reducerFreeEbook,
} from "./book/reducers/reducerBook";
import { reducerQuery } from "./book/reducers/reducerQuery";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducerLoader,
  reducerBook,
  reducerSelectedBook,
  reducerFreeEbook,
  reducerQuery,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

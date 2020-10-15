import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { BookContext } from "../../BookProvider";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../redux/book/actions";

export const Searchbar = () => {
  const { query } = useContext(BookContext);
  const [queryValue, setqueryValue] = query;

  const dispatch = useDispatch();

  const queryRedux = useSelector((state) => state.reducerQuery);

  const handleSetName = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <>
      <TextField
        fullWidth
        value={queryRedux}
        onChange={handleSetName}
        id="filled-basic"
        label="Book name..."
        variant="outlined"
      />
    </>
  );
};

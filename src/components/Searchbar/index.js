import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { BookContext } from "../../BookProvider";

export const Searchbar = () => {
  const { query, dispatchQuery } = useContext(BookContext);

  const handleSetName = (e) => {
    dispatchQuery({ type: "SET_QUERY", payload: e.target.value });
  };

  return (
    <>
      <TextField
        fullWidth
        value={query}
        onChange={handleSetName}
        id="filled-basic"
        label="Book name..."
        variant="outlined"
      />
    </>
  );
};

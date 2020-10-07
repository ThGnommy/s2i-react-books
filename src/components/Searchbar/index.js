import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { BookContext } from "../../BookProvider";

export const Searchbar = () => {
  const {
    query: [queryValue, setqueryValue],
  } = useContext(BookContext);

  const handleSetName = (e) => {
    setqueryValue(e.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        value={queryValue}
        onChange={handleSetName}
        id="filled-basic"
        label="Book name..."
        variant="outlined"
      />
    </>
  );
};

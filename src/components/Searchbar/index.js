import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { BookContext } from "../../BookProvider";

export const Searchbar = () => {
  const [name, setName] = useContext(BookContext);

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <TextField
        id="filled-full-width"
        label="Name"
        style={{ margin: 8 }}
        placeholder="Search..."
        margin="normal"
        onChange={handleSetName}
        InputLabelProps={{
          shrink: true,
          style: {
            color: "white",
            borderColor: "green",
          },
        }}
        InputProps={{ style: { color: "white", borderColor: "white" } }}
        variant="filled"
      />
    </>
  );
};

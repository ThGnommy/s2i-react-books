import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { BookContext } from "../../BookProvider";
import { FetchData } from "../../FetchData";

export const ButtonSearch = () => {
  const [name, setName] = useContext(BookContext);

  const handleOnClick = () => {
    return FetchData(name);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOnClick}>
        Search
      </Button>
    </>
  );
};

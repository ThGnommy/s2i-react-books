import React, { useState, createContext } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [name, setName] = useState("");

  return (
    <BookContext.Provider value={[name, setName]}>
      {props.children}
    </BookContext.Provider>
  );
};

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchPage } from "./Pages/SearchPage";
import { BookDetailsPage } from "./Pages/BookDetailsPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/book/:bookTitle">
            <BookDetailsPage />
          </Route>
          <Route exact path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

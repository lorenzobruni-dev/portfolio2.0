import React from "react";
import "./App.css";
import { Redirect, Route, Router, Switch } from "wouter";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <MainPage location={"/"} isHomepage={true} />
        </Route>
        <Route path={"/about-me"}>
          <MainPage location={"/about-me"} isHomepage={false} />
        </Route>
        <Route path={"/contact"}>
          <MainPage location={"/contact"} isHomepage={false} />
        </Route>
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

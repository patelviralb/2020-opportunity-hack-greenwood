import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "../components/home";
import FindMatch from "../containers/find-match";

const AppRouter = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/find-match" exact component={FindMatch} />

        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

function Appp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default Appp;

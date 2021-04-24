import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import TaskDetail from "./pages/TaskDetail";

function Appp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/:id" component={Detail} /> */}
        <Route exact path="/:id" component={TaskDetail} />
      </Switch>
    </Router>
  );
}

export default Appp;

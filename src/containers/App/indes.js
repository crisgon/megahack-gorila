import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../Login";
import { Register } from "../Register";

import "./style.css";

export function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/cadastro" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

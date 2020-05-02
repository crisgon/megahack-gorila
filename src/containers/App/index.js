import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "../Login";
import { Register } from "../Register";
import { ProfessionalsList } from "../ProfessionalsList";
import { GorilaPage } from "../GorilaPage";

import "./style.css";

// Call it once in your app. At the root of your app is the best place
toast.configure();

export function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/gorila" component={GorilaPage} />
          <Route path="/lista-de-profissionais" component={ProfessionalsList} />
          <Route path="/cadastro" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "../Login";
import { Register } from "../Register";
import { ProfessionalsList } from "../ProfessionalsList";
import { ProfileForm } from "../ProfileForm";
import { ClientsList } from "../ClientsList";
import { GorilaPage } from "../GorilaPage";
import { PendentsRequests } from "../PendentsRequests";
import { Choice } from "../Choice";

import "./style.css";

// Call it once in your app. At the root of your app is the best place
toast.configure();

export function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/gorila" component={GorilaPage} />
          <Route path="/megahack-gorila/escolha" component={Choice} />
          <Route
            path="/megahack-gorila/requisicoes-pendentes"
            component={PendentsRequests}
          />
          <Route
            path="/megahack-gorila/lista-de-clientes"
            component={ClientsList}
          />
          <Route
            path="/megahack-gorila/lista-de-profissionais"
            component={ProfessionalsList}
          />
          <Route
            path="/megahack-gorila/definicao-de-perfil"
            component={ProfileForm}
          />
          <Route path="/megahack-gorila/cadastro" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

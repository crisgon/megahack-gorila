import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export function Choice() {
  return (
    <div className="escolha">
      <h1>
        Deseja descobrir seu perfil de investimento e escolher um profissional
        que combine com seu perfil?
      </h1>
      <div className="acoes">
        <Link to="/megahack-gorila/definicao-de-perfil">Sim</Link>
        <Link to="/megahack-gorila/requisicoes-pendentes">Não</Link>
      </div>
    </div>
  );
}

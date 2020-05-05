import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./style.css";
import { toast } from "react-toastify";

export function GorilaPage() {
  const history = useHistory();
  const profissionalId = localStorage.getItem("profissionalVinculadoId");

  const desvincularProfissional = () => {
    console.log(
      `http://wmonitor.tk:50124/cliente/remover/profissional/${profissionalId}`
    );
    axios
      .post(
        `http://wmonitor.tk:50124/cliente/remover/profissional/${profissionalId}`
      )
      .then(() => {
        toast.success("Profissional desvinculado com sucesso!");
        history.push("/megahack-gorila/lista-de-profissionais");
      });
  };

  return (
    <div className="gorilaPage">
      <h1>
        Agora você já possue um profissional para te acompanhar! Bastar iniciar
        lançar seus investimentos no <a href="https://gorila.com.br/">Gorila</a>
        !
      </h1>

      <button className="button-default" onClick={desvincularProfissional}>
        Desvincular
      </button>
    </div>
  );
}

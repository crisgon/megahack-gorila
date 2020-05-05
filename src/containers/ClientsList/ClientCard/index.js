import React, { useState } from "react";
import axios from "axios";
import {
  AiOutlinePlus,
  AiOutlineCheck,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import "react-confirm-alert/src/react-confirm-alert.css";

import "./style.css";

export function ClientCard(props) {
  const userId = localStorage.getItem("gorilaEmail");
  const professionalId = localStorage.getItem("profissionalVinculadoId");
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function choiceClient() {
    setIsLoading(true);
    axios
      .post(
        `http://wmonitor.tk:50124/solicitacao/nova?idProfissional=${professionalId}&idCliente=${userId}&status=ativo`
      )
      .then((res) => {
        setIsSelected(!isSelected);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="client-card">
      <button
        className={`client-card-action ${
          isSelected ? "client-card-action-checked" : ""
        }`}
        onClick={choiceClient}
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters className="spin" />
        ) : (
          <span>{isSelected ? <AiOutlineCheck /> : <AiOutlinePlus />}</span>
        )}
      </button>

      <h2 className="client-name">{props.info.name}</h2>

      <span className="client-type">{props.info.type}</span>
      <div className="preferences">
        <h4>Telefone</h4>

        {props.info.telefone}
      </div>

      <div className="preferences">
        <h4>Email</h4>

        {props.info.email}
      </div>
    </div>
  );
}

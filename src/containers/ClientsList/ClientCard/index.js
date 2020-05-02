import React, { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineCheck,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import "react-confirm-alert/src/react-confirm-alert.css";

import "./style.css";

export function ClientCard(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function choiceClient() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSelected(!isSelected);
    }, 1000);
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
        <h4>Especialidades</h4>

        <ul>
          {props.info.preferences.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

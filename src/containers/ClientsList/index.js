import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ClientCard } from "./ClientCard";

import "./style.css";

export function ClientsList() {
  const getClients = () => {
    axios.post("http://wmonitor.tk:50124/clients").then((res) => {
      setClientList(
        res.data.result.map((c) => {
          return {
            id: c.id,
            name: c.nome,
            type: c.perfil_investimento,
            telefone: c.telefone,
            email: c.email,
          };
        })
      );
    });
  };

  useEffect(() => {
    getClients();
  }, []);

  const [clientList, setClientList] = useState([]);

  return (
    <section className="clientsListContainer">
      <header className="clientsListHeader">
        <Link to="/">
          <img src="https://gorila.com.br/assets/img/logo.svg" alt="Gorila" />
        </Link>
      </header>

      <h1>Clientes</h1>

      <span className="resultInfo">
        {clientList.length} clientes compatíveis com seu perfil
      </span>

      <div className="listContainer">
        {clientList.map((p) => (
          <ClientCard key={p.id} info={p} />
        ))}
      </div>
    </section>
  );
}

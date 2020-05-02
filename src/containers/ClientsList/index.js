import React from "react";
import { Link } from "react-router-dom";

import { ClientCard } from "./ClientCard";
import { SearchInput } from "../../components/SearchInput";

import "./style.css";

export function ClientsList() {
  const clientList = [
    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      type: "Moderado",
      preferences: ["Renda Fixa", " Moedas"],
    },

    {
      name: "Ana Dias",
      type: "Moderado",
      preferences: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa"],
    },
    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      type: "Moderado",
      preferences: ["Renda Fixa", " Moedas"],
    },

    {
      name: "Ana Dias",
      type: "Moderado",
      preferences: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa", "Renda variável", " Moedas"],
    },

    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      type: "Moderado",
      preferences: ["Renda Fixa", " Moedas"],
    },

    {
      name: "Ana Dias",
      type: "Moderado",
      preferences: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      type: "Moderado",
      preferences: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      type: "Moderado",
      preferences: ["Renda Fixa", " Moedas"],
    },

    {
      name: "Ana Dias",
      type: "Moderado",
      preferences: [" Moedas"],
    },
  ];
  return (
    <section className="clientsListContainer">
      <header className="clientsListHeader">
        <Link to="/">
          <img src="https://gorila.com.br/assets/img/logo.svg" alt="Gorila" />
        </Link>
      </header>

      <div className="clientsListFilters">
        <SearchInput placeholder="procurando algo?" />
      </div>

      <span className="resultInfo">
        {clientList.length} clientes compatíveis com sua busca
      </span>

      <div className="listContainer">
        {clientList.map((p) => (
          <ClientCard info={p} />
        ))}
      </div>
    </section>
  );
}

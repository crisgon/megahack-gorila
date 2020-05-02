import React from "react";
import { ProfessionalCard } from "./ProfessionalCard";
import { SearchInput } from "../../components/SearchInput";

import "./style.css";

export function ProfessionalsList() {
  const professionalsList = [
    {
      name: "Bernard Robinson",
      rating: 5.0,
      totalOfClients: 1291,
      photo: "men/21",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      rating: 4.9,
      totalOfClients: 987,
      photo: "men/25",
      skils: ["Renda Fixa", " Moedas"],
    },
    {
      name: "Ana Dias",
      rating: 4.1,
      totalOfClients: 214,
      photo: "women/21",
      skils: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      rating: 3.9,
      totalOfClients: 91,
      photo: "women/1",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Bernard Robinson",
      rating: 5.0,
      totalOfClients: 1291,
      photo: "men/21",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      rating: 4.9,
      totalOfClients: 987,
      photo: "men/25",
      skils: ["Renda Fixa", " Moedas"],
    },
    {
      name: "Ana Dias",
      rating: 4.1,
      totalOfClients: 214,
      photo: "women/21",
      skils: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      rating: 3.9,
      totalOfClients: 91,
      photo: "women/1",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Bernard Robinson",
      rating: 5.0,
      totalOfClients: 1291,
      photo: "men/21",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      rating: 4.9,
      totalOfClients: 987,
      photo: "men/25",
      skils: ["Renda Fixa", " Moedas"],
    },
    {
      name: "Ana Dias",
      rating: 4.1,
      totalOfClients: 214,
      photo: "women/21",
      skils: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      rating: 3.9,
      totalOfClients: 91,
      photo: "women/1",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Bernard Robinson",
      rating: 5.0,
      totalOfClients: 1291,
      photo: "men/21",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      rating: 4.9,
      totalOfClients: 987,
      photo: "men/25",
      skils: ["Renda Fixa", " Moedas"],
    },
    {
      name: "Ana Dias",
      rating: 4.1,
      totalOfClients: 214,
      photo: "women/21",
      skils: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      rating: 3.9,
      totalOfClients: 91,
      photo: "women/1",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Bernard Robinson",
      rating: 5.0,
      totalOfClients: 1291,
      photo: "men/21",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      rating: 4.9,
      totalOfClients: 987,
      photo: "men/25",
      skils: ["Renda Fixa", " Moedas"],
    },
    {
      name: "Ana Dias",
      rating: 4.1,
      totalOfClients: 214,
      photo: "women/21",
      skils: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      rating: 3.9,
      totalOfClients: 91,
      photo: "women/1",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Bernard Robinson",
      rating: 5.0,
      totalOfClients: 1291,
      photo: "men/21",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
    {
      name: "Derek Hicks",
      rating: 4.9,
      totalOfClients: 987,
      photo: "men/25",
      skils: ["Renda Fixa", " Moedas"],
    },
    {
      name: "Ana Dias",
      rating: 4.1,
      totalOfClients: 214,
      photo: "women/21",
      skils: [" Moedas"],
    },
    {
      name: "Beatrice Coleman",
      rating: 3.9,
      totalOfClients: 91,
      photo: "women/1",
      skils: ["Renda Fixa", "Renda variável", " Moedas"],
    },
  ];
  return (
    <section className="professionalsListContainer">
      <header className="professionalsListHeader">
        <img src="https://gorila.com.br/assets/img/logo.svg" alt="Gorila" />
      </header>

      <div className="professionalsListFilters">
        <SearchInput placeholder="procurando algo?" />
      </div>

      <span className="resultInfo">
        {professionalsList.length} profissionais compatíveis com seu perfil
      </span>

      <div className="listContainer">
        {professionalsList.map((p) => (
          <ProfessionalCard info={p} />
        ))}
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProfessionalCard } from "./ProfessionalCard";
import { SearchInput } from "../../components/SearchInput";

import "./style.css";

export function ProfessionalsList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProfissionais();
  }, []);

  const getProfissionais = async () => {
    await axios
      .post(
        "https://wmonitor.tk:50124/cliente/mentores/5eb00eda060b8c51c02e7162"
      )
      .then((res) => {
        setList(
          res.data.result[0].perfil_compativel.map((i) => {
            return {
              id: i._id,
              name: i.nome,
              rating: 5,
              totalOfClients: 1291,
              photo: "men/21",
              skils: [i.especialidade],
            };
          })
        );
      })
      .catch(() =>
        toast.error(
          "Ops, ocorreu um problema ao tentar carregar a lista de profissionais."
        )
      );
  };

  return (
    <section className="professionalsListContainer">
      <header className="professionalsListHeader">
        <Link to="/">
          <img src="https://gorila.com.br/assets/img/logo.svg" alt="Gorila" />
        </Link>
      </header>

      <div className="professionalsListFilters">
        <SearchInput placeholder="procurando algo?" />
      </div>

      <span className="resultInfo">
        {list.length} profissionais compatíveis com seu perfil
      </span>

      <div className="listContainer">
        {list.map((p) => (
          <ProfessionalCard key={p._id} info={p} />
        ))}
      </div>
    </section>
  );
}

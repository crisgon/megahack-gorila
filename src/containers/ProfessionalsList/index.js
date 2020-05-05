import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProfessionalCard } from "./ProfessionalCard";

import "./style.css";

export function ProfessionalsList() {
  const userId = localStorage.getItem("gorilaEmail");
  const [list, setList] = useState([]);

  const getProfissionais = useCallback(async () => {
    await axios
      .post(`http://wmonitor.tk:50124/cliente/mentores/${userId}`)
      .then((res) => {
        setList(
          res.data.result[0].perfil_compativel.map((i, index) => {
            return {
              id: i._id,
              name: i.nome,
              rating: Math.round(5 * Math.random()),
              totalOfClients: Math.round(index + 1 * Math.random()),
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
  }, [userId]);

  useEffect(() => {
    getProfissionais();
  }, [getProfissionais]);

  return (
    <section className="professionalsListContainer">
      <header className="professionalsListHeader">
        <Link to="/">
          <img src="https://gorila.com.br/assets/img/logo.svg" alt="Gorila" />
        </Link>
      </header>

      <h1>Profissionais</h1>

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

import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import "./style.css";
import { toast } from "react-toastify";

export function PendentsRequests() {
  const userId = localStorage.getItem("gorilaEmail");
  const history = useHistory();

  const getRequests = useCallback(async () => {
    console.log(`http://wmonitor.tk:50124/solicitacao/findByActives/${userId}`);
    axios
      .get(`http://wmonitor.tk:50124/solicitacao/findByActives/${userId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => toast.error("Ops, ocorreu um problema."));
  }, [userId]);

  useEffect(() => {
    getRequests();
  }, [getRequests]);

  const [requests, setRequests] = useState([
    {
      name: "João",
      id: "1",
    },
    {
      name: "Marcos",
      id: "2",
    },
    {
      name: "Pedro",
      id: "3",
    },
  ]);

  const acept = (id) => {
    axios
      .post(`http://wmonitor.tk:50124/solicitacao/aceitar/${id}`)
      .then((res) => {
        console.log(res.data);
        history.push("/gorila");
      })
      .catch(() => toast.error("Ops, ocorreu um problema."));
  };

  const reject = (id) => {
    setRequests(requests.filter((i) => i.id !== id));
    axios
      .post(`http://wmonitor.tk:50124/solicitacao/rejeitar/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => toast.error("Ops, ocorreu um problema."));
  };

  return (
    <section className="pendentsRequests">
      <header className="professionalsListHeader">
        <Link to="/">
          <img src="https://gorila.com.br/assets/img/logo.svg" alt="Gorila" />
        </Link>
      </header>

      <h1>Pendentes</h1>

      <span className="resultInfo">
        {requests.length} profissionais que querem te acompanhar.
      </span>
      <ul>
        {requests.map((r) => {
          return (
            <li key={r.id}>
              {r.name}
              <button className="acept" onClick={() => acept(r.id)}>
                <AiFillCheckCircle />
              </button>
              <button className="reject" onClick={() => reject(r.id)}>
                <AiOutlineCloseCircle />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

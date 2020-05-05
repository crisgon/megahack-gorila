import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function makeLogin(e) {
    setLoading(true);
    e.preventDefault();
    if (email) {
      axios
        .post(`http://wmonitor.tk:50124/cliente/${email}`)
        .then((res) => {
          history.push("/megahack-gorila/escolha");
          setEmail("");
          localStorage.setItem("gorilaEmail", res.data.result._id.$oid);
        })
        .catch(() => {
          toast.error("Ops, ocorreu um erro ao tentar fazer o login.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <section className="login-register-container" onSubmit={makeLogin}>
      <div>
        <h1 className="login-register-text">BEM-VINDO AO GORILA!!</h1>
      </div>

      <form className="login-register-form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-default"
          placeholder="email"
          type="email"
        />
        <div className="form-actions">
          <Link to="/megahack-gorila/cadastro" className="button-secondary">
            Cadastre-se
          </Link>
          <button type="submit" className="button-default">
            {loading ? (
              <AiOutlineLoading3Quarters className="spin" />
            ) : (
              "Entrar"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./style.css";

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  async function makeLogin(e) {
    setLoading(true);
    e.preventDefault();
    if (email && pass) {
      setTimeout(() => {
        setLoading(false);
        history.push("/lista-de-profissionais");
        setEmail("");
        setPass("");
      }, 2000);
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
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="input-default"
          placeholder="senha"
          type="password"
        />
        <div className="form-actions">
          <Link to="/cadastro" className="button-secondary">
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
        <Link to="/lista-de-profissionais">Profissionais</Link>
        <Link to="/lista-de-clientes">Clientes</Link>
      </form>
    </section>
  );
}

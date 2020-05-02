import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./style.css";

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function makeLogin(e) {
    e.preventDefault();
    console.log({ email, pass, e });
    if (email && pass) history.push("/lista-de-profissionais");

    setEmail("");
    setPass("");
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
            Entrar
          </button>
        </div>
      </form>
    </section>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function makeLogin(e) {
    e.preventDefault();
    console.log({ email, pass, e });
  }

  return (
    <section className="login-container" onSubmit={makeLogin}>
      <div>
        <h1 className="login-text">BEM-VINDO AO GORILA!!</h1>
      </div>

      <form className="login-form">
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
          type="pass"
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

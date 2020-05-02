import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [pass, setPass] = useState("");

  function makeLogin(e) {
    e.preventDefault();
    console.log({ name, email, age, gender, pass });
    setName("");
    setEmail("");
    setAge("");
    setGender("");
    setPass("");
  }

  return (
    <section className="login-register-container" onSubmit={makeLogin}>
      <div>
        <h1 className="login-register-text">COMECE A INVESTIR JÁ!</h1>
      </div>

      <form className="login-register-form register-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-default"
          placeholder="name"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-default"
          placeholder="email"
          type="email"
        />
        <div className="form-age-gender-container">
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-default age-input"
            placeholder="age"
            type="number"
            min="1"
          />
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-default gender-input"
            placeholder="gender"
            type="text"
          />
        </div>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="input-default"
          placeholder="senha"
          type="password"
        />
        <div className="form-actions">
          <Link to="/" className="button-secondary">
            Fazer Login
          </Link>
          <button type="submit" className="button-default">
            Cadastra-se
          </button>
        </div>
      </form>
    </section>
  );
}

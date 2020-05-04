import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "./style.css";

export function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  async function makeRegister(e) {
    e.preventDefault();

    await axios.post(
      `https://wmonitor.tk:50124/cliente/create?nome=${name}&idade=${age}&sexo=${gender}&localidade=''&telefone=${phone}&email=${email}&path_image='&perfil=''`
    );

    history.push("/megahack-gorila/definicao-de-perfil");
    setName("");
    setEmail("");
    setAge("");
    setGender("");
  }

  return (
    <section className="login-register-container" onSubmit={makeRegister}>
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
          type="text"
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input-default"
          placeholder="telefone"
          type="text"
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

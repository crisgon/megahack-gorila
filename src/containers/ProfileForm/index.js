import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "./style.css";

export function ProfileForm() {
  const history = useHistory();

  const userId = "5eae635b512f03495711d905";
  const [q1, setQ1] = useState("a");
  const [q2, setQ2] = useState("a");
  const [q3, setQ3] = useState("a");
  const [q4, setQ4] = useState("a");
  const [q5, setQ5] = useState("a");
  const [q6, setQ6] = useState("a");
  const [q7, setQ7] = useState("a");
  const [q8, setQ8] = useState("a");

  async function sendForm(e) {
    e.preventDefault();
    await axios.post(
      `http://wmonitor.tk:50123/?&q=${q1}&q=${q2}&q=${q3}&q=${q4}&q=${q5}&q=${q6}&q=${q7}&q=${q8}&id=${userId}`
    );
    history.push("/megahack-gorila/lista-de-profissionais");
  }

  return (
    <form className="profileForm">
      <Link to="/">
        <img src="https://gorila.com.br/assets/img/logo.svg" alt="Gorila" />
      </Link>
      <h1>
        Antes de prosseguir, precisamos saber qual o seu perfil de investimeto.
      </h1>
      <p>
        Por quanto tempo você pretende deixar seu dinheiro investido?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ1(e.currentTarget.value)}
            type="radio"
            name="q1"
          />
          a - Menos de 6 meses
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ1(e.target.value)}
            type="radio"
            name="q1"
          />
          b - Entre 6 meses a 1 ano
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ1(e.target.value)}
            type="radio"
            name="q1"
          />
          c - Entre 1 ano a 3 anos
        </label>
        <label>
          <input
            value={"d"}
            onChange={(e) => setQ1(e.target.value)}
            type="radio"
            name="q1"
          />
          d - Acima de 3 anos
        </label>
      </p>
      <p>
        Qual o objetivo desse investimento?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ2(e.target.value)}
            type="radio"
            name="q2"
          />
          a - Preservação do capital para não perder valor ao longo do tempo,
          assumindo baixos riscos de perdas
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ2(e.target.value)}
            type="radio"
            name="q2"
          />
          b - Aumento gradual do capital ao longo do tempo, assumindo riscos
          moderados
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ2(e.target.value)}
            type="radio"
            name="q2"
          />
          c - Aumento do capital acima da taxa de retorno média do mercado,
          mesmo que isso implique assumir riscos de perdas elevadas
        </label>
        <label>
          <input
            value={"d"}
            onChange={(e) => setQ2(e.target.value)}
            type="radio"
            name="q2"
          />
          d - Obter no curto prazo retornos elevados e signifcativamente acima
          da taxa de retorno média do mercado, assumindo riscos elevados
        </label>
      </p>
      <p>
        Quais as aplicações fnanceiras realizadas nos últimos 24 meses?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ3(e.target.value)}
            type="radio"
            name="q3"
          />
          a - Não realizei aplicações fnanceiras ou realizei apenas com produtos
          e/ou fundos de renda fxa
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ3(e.target.value)}
            type="radio"
            name="q3"
          />
          b - Apliquei em produtos ou fundos de renda fxa e/ou renda variável
          e/ou derivativos com fnalidade de hedge (proteção)
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ3(e.target.value)}
            type="radio"
            name="q3"
          />
          c - Apliquei em produtos ou fundos de renda fxa e/ou renda variável
          e/ou derivativos com fnalidade especulação ou alavancagem
        </label>
      </p>
      <p>
        Qual das alternativas melhor classifca sua formação e experiência com o
        mercado fnanceiro?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ4(e.target.value)}
            type="radio"
            name="q4"
          />
          a - Não possuo formação acadêmica ou conhecimento do mercado fnanceiro
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ4(e.target.value)}
            type="radio"
            name="q4"
          />
          b - Possuo formação acadêmica na área fnanceira, mas não tenho
          experiência com o mercado fnanceiro
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ4(e.target.value)}
            type="radio"
            name="q4"
          />
          c - Possuo formação acadêmica em outra área, mas possuo conhecimento
          do mercado fnanceiro
        </label>
        <label>
          <input
            value={"d"}
            onChange={(e) => setQ4(e.target.value)}
            type="radio"
            name="q4"
          />
          d - Possuo formação acadêmica na área fnanceira ou pleno conhecimento
          do mercado fnanceiro
        </label>
      </p>
      <p>
        Considerando seus rendimentos regulares, qual a porcentagem você
        pretende reservar para aplicações fnanceiras?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ5(e.target.value)}
            type="radio"
            name="q5"
          />
          a - No máximo 25%
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ5(e.target.value)}
            type="radio"
            name="q5"
          />
          b - Entre 25,01 e 50%
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ5(e.target.value)}
            type="radio"
            name="q5"
          />
          c - Acima de 50%
        </label>
      </p>
      <p>
        Caso as suas aplicações sofressem uma queda superior a 30%, o que você
        faria?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ6(e.target.value)}
            type="radio"
            name="q6"
          />
          a - Resgataria toda a aplicação e aplicaria na poupança
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ6(e.target.value)}
            type="radio"
            name="q6"
          />
          b - Manteria aplicação aguardando uma melhora do mercado
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ6(e.target.value)}
            type="radio"
            name="q6"
          />
          c - Aumentaria a aplicação para aproveitar as oportunidades do mercado
        </label>
      </p>
      <p>
        Como está distribuído o seu patrimônio?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ7(e.target.value)}
            type="radio"
            name="q7"
          />
          a - Meu patrimônio não está aplicado ou está todo aplicado em renda
          fxa e/ou imóveis
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ7(e.target.value)}
            type="radio"
            name="q7"
          />
          b - Menos de 25% em renda variável e o restante em renda fxa e/ou
          imóveis
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ7(e.target.value)}
            type="radio"
            name="q7"
          />
          c - Entre 25,01 e 50% aplicado em renda variável e o restante em renda
          fxa e/ou imóveis
        </label>
        <label>
          <input
            value={"d"}
            onChange={(e) => setQ7(e.target.value)}
            type="radio"
            name="q7"
          />
          d - Acima de 50% em renda variável
        </label>
      </p>
      <p>
        Em relação as aplicações e rendimentos, em qual dessas situações você se
        enquadra?
        <label>
          <input
            value={"a"}
            defaultChecked
            onChange={(e) => setQ8(e.target.value)}
            type="radio"
            name="q8"
          />
          a - Conto com o rendimento dessas aplicações para complementar minha
          renda mensal
        </label>
        <label>
          <input
            value={"b"}
            onChange={(e) => setQ8(e.target.value)}
            type="radio"
            name="q8"
          />
          b - Eventualmente posso resgatar parte das aplicações para fazer
          frente aos meus gastos. Contudo, não tenho intenção de resgatar no
          curto prazo e pretendo fazer aplicações regulares
        </label>
        <label>
          <input
            value={"c"}
            onChange={(e) => setQ8(e.target.value)}
            type="radio"
            name="q8"
          />
          c - Não tenho intenção de resgatar no curto prazo e ainda pretendo
          fazer aplicações regulares
        </label>
        <label>
          <input
            value={"d"}
            onChange={(e) => setQ8(e.target.value)}
            type="radio"
            name="q8"
          />
          d - Não tenho intenção de resgatar no curto prazo, mas não pretendo
          realizar novas aplicações
        </label>
      </p>

      <button type="submit" className="button-default" onClick={sendForm}>
        Continuar
      </button>
    </form>
  );
}

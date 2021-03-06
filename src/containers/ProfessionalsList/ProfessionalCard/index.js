import React from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";

import "./style.css";
import { toast } from "react-toastify";

export function ProfessionalCard(props) {
  const userId = localStorage.getItem("gorilaEmail");
  const history = useHistory();
  const photoUrl = `https://randomuser.me/api/portraits/${props.info.photo}.jpg`;

  console.log(props.info);
  const choiceProfessional = () =>
    confirmAlert({
      title: "Confirmar?",
      message: `Você deseja confirmar a escolha de ${
        props.info.name
      }, com especialidade em ${props.info.skils.map((s) => s).join(", ")}`,
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            const profId = props.info.id;
            axios
              .post(
                `http://wmonitor.tk:50124/cliente/${userId}/adicionar/profissional/${profId}`
              )
              .then((res) => {
                toast.success("Profissional vinculado com sucesso!");
                localStorage.setItem("profissionalVinculadoId", profId);
                history.push("/gorila");
              })
              .catch(() =>
                toast.error(
                  "Ops, ocorreu um problema ao tentar carregar a lista de profissionais."
                )
              );
          },
        },
        {
          label: "Não",
        },
      ],
    });

  return (
    <div className="professionalCard">
      <div
        className="professionalPhoto"
        style={{
          backgroundImage: `url(${photoUrl})`,
        }}
      >
        <div className="professionalActions">
          <button className="plusButton" onClick={choiceProfessional}>
            <AiOutlinePlus />
          </button>
          <button className="infoButton">
            <AiOutlineInfoCircle />
          </button>
        </div>
      </div>

      <div className="professional-info">
        <h2 className="professional-name">{props.info.name}</h2>

        <div>
          <StarRatings
            rating={props.info.rating}
            starRatedColor="#FEF753"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
          />
          <span className="professionalRating">{props.info.rating}</span>
        </div>
        <span className="totalOfClients">
          {props.info.totalOfClients} clientes
        </span>

        <div className="skils">
          <h4>Especialidades</h4>

          <ul>
            {props.info.skils.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import StarRatings from "react-star-ratings";
import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./style.css";

export function ProfessionalCard(props) {
  const photoUrl = `https://randomuser.me/api/portraits/${props.info.photo}.jpg`;

  return (
    <div className="professionalCard">
      <div
        className="professionalPhoto"
        style={{
          backgroundImage: `url(${photoUrl})`,
        }}
      >
        <div className="professionalActions">
          <Link className="plusButton" to="/gorila">
            <AiOutlinePlus />
          </Link>
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

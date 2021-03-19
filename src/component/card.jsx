import React from "react";
import "./column.css";

// import Col from "./Col";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = ({ name1, flag, pop, cap, reg, time }) => {
  return (
    <div
      className="card  col-md-6 col-lg-4 col-sm-12 border"
      style={{
        maxWidth: 18 + "rem",
        backgroundColor: "rgba(0, 0, 110)",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{name1}</h5>
        <img className="card-img-top" src={flag} alt="Card image cap" />
        <p className="card-text">
          <b>Capital</b> : <span>{cap}</span>
        </p>
        <p className="card-text">
          <b>Region</b> : <span>{reg}</span>
        </p>
        <p className="card-text">
          <b>Time</b> : <span>{time}</span>
        </p>
        <p className="card-text">
          <b>Population</b>: <span>{pop}</span>
        </p>
      </div>
    </div>
  );
};
export default Card;

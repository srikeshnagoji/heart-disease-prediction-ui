import React from "react";
import "./PredictionResult.css";
const PredictionResult = (props) => {
  let cardColorClassName = "card-3";
  if (props.type?.toLowerCase() === "binary") {
    cardColorClassName = props.positive ? "card-1" : "card-2";
  }
  return (
    <div>
      <div class="heading">
        <h1 class="heading__title">Prediction</h1>
      </div>
      <div class="cards">
        <div class={`card ${cardColorClassName}`}>
          <h1 class="card__title">
            {props.children ? props.children.message : "Not yet predicted"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;

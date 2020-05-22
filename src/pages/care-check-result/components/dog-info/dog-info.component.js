import React from "react";

import dog from "../../../../images/akita_dummy.jpg";

import "./dog-info.styles.css";

export const DogInfo = (props) => {
  return (
    <div className="ccr-info-container">
      <div className="ccr-header-container">
        <h2 className="ccr-header">{props.breed}</h2>
      </div>
      <div className="ccr-image-container">
        <img src={dog} alt="dog" className="ccr-image" />
      </div>
      <h2 className="ccr-header">Додаткова інформація</h2>
      <div className="ccr-info-container">
        <h3 className="ccr-info-header">Догляд за породою</h3>
        <p className="ccr-info-text">{props.about.aboutBreed}</p>
      </div>
      <div className="ccr-info-container">
        <h3 className="ccr-info-header">Можливі проблеми</h3>
        <p className="ccr-info-text">{props.about.possibleProblems}</p>
      </div>
    </div>
  );
};

import React from "react";

import alternativePhoto from "../../../../images/care-page-dog.svg";

import "./page-header.styles.css";

export const PageHeader = (props) => {
  return (
    <div className="pp-header">
      <img
        src={props.petPhoto || alternativePhoto}
        className="pp-pet-photo"
        alt="pet"
      />
      <h2 className="pp-owner"> 
        <span className="pp-owner-title">Власник: </span>
        {props.name}
      </h2>
    </div>
  );
};

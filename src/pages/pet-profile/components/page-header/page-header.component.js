import React from "react";
import { useHistory } from "react-router-dom";

import alternativePhoto from "../../../../images/care-page-dog.svg";
import { ROUTES } from '../../../../shared/constants/routes.constants';

import "./page-header.styles.css";

export const PageHeader = (props) => {
  const history = useHistory();

  const onUserClick = () => {
    history.push(ROUTES.userProfile);
  };

  return (
    <div className="pp-header">
      <div className="pp-pet-photo-container">
        <img
          src={props.petPhoto || alternativePhoto}
          className="pp-pet-photo"
          alt="pet"
        />
      </div>
      <h2 className="pp-owner">
        <span className="pp-owner-title">Власник: </span>
        <span className="pp-owner-name" onClick={onUserClick}>
          {props.name}
        </span>
      </h2>
    </div>
  );
};

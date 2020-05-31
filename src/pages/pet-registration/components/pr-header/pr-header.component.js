import React from "react";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../../../shared/constants/routes.constants";
import manWithDog from "../../../../images/pet-reg-photo.svg";
import logo from "../../../../images/logo.png";

import "./pr-header.styles.css";

export const PetRegistrationHeader = () => {
  const history = useHistory();

  const onLogoClick = () => {
    history.push(ROUTES.landing);
  };

  return (
    <div className="pr-header">
      <img src={logo} className="pr-logo" alt="logo" onClick={onLogoClick} />
      <img src={manWithDog} className="pr-banner" alt="man with dog" />
    </div>
  );
};

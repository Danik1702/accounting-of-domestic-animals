import React from "react";
import { useHistory } from "react-router-dom";

import instagram from "../../../images/icons8-instagram.svg";
import facebook from "../../../images/icons8-facebook.svg";
import logo from "../../../images/logo.png";
import { ROUTES } from "../../constants/routes.constants";

import "./footer.styles.css";

export const Footer = () => {
  const history = useHistory();

  const onLogoClick = () => {
    history.push(ROUTES.landing);
  };

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-social">
          <p className="social-header">Шукайте нас у соцмережах</p>
          <div className="social-icons">
            <img
              src={instagram}
              className="instagram-icon icon"
              alt="instagram-icon"
            />
            <img
              src={facebook}
              className="facebook-icon icon"
              alt="facebook-icon"
            />
          </div>
        </div>
        <div className="logo-container">
          <img
            src={logo}
            className="logo-icon icon"
            alt="logo-icon"
            onClick={onLogoClick}
          />
        </div>
        <div className="contacts-container">
          <p className="contacts-title">Контакти</p>
          <p className="contacts-text">пошта: den4ik020220@gmail.com</p>
          <p className="contacts-text">телефон: 380635555555</p>
        </div>
      </div>
    </div>
  );
};

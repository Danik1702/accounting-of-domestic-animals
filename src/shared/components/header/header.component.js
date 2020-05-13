import React from "react";

import logo from "../../../images/logo.png";

import "./header.styles.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <ul className="list-container">
          <li className="list-container__link">Головна</li>
          <li className="list-container__link">Зниклі тварини</li>
          <li className="list-container__link">Приют</li>
          <li className="list-container__link">На скільки хороший я власник</li>
        </ul>
        <div className="buttons-container">
          <div className="sign-in button">Вхід</div>
          <div className="sign-up button">Реєстрація</div>
        </div>
      </div>
    </div>
  );
};

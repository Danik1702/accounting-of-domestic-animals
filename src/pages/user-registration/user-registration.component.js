import React from "react";

import logo from "../../images/logo.png";
import image from "../../images/reg-page-photo.svg";

import "./user-registration.styles.css";

export const UserRegistration = () => {
  const onFormSubmit = () => {
    console.log("hi");
  };

  const renderLeftSide = () => {
    return (
      <>
        <img src={logo} className="reg-logo" alt="logo" />
        <img src={image} className="reg-page-image" alt="dog-with-peoples" />
      </>
    );
  };

  const renderRightSide = () => {
    return (
      <>
        <div className="reg-form-wrapper">
          <form onSubmit={onFormSubmit} className="reg-form">
            <div className="google-container">
              <div className="google-registartion user-reg-button">
                Зареєструватсия з допомогою Google
              </div>
            </div>

            <div className="name-container">
              <div className="name-container-field">
                <label className="label">Ім'я</label>
                <input name="first-name" className="name-input input-field" />
              </div>

              <div className="name-container-field">
                <label className="label">Прізвище</label>
                <input name="last-name" className="name-input input-field" />
              </div>
            </div>

            <label className="label">Адреса електронної пошти</label>
            <input name="email" className="input-field" />

            <label className="label">Пароль</label>
            <input type="password" name="password" className="input-field" />

            <label className="label">Повторіть пароль</label>
            <input type="password" name="password" className="input-field" />

            <div className="submit-container">
              <input
                type="submit"
                value="Створити аккаунт"
                className="submit user-reg-button"
              />
            </div>
          </form>
        </div>
      </>
    );
  };

  return (
    <div className="registration-page">
      <div className="left-container">{renderLeftSide()}</div>
      <div className="right-container">{renderRightSide()}</div>
    </div>
  );
};

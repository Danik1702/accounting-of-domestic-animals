import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useHistory, Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes.constants';
import logo from "../../../images/logo.png";

import "./header.styles.css";

Modal.setAppElement("#root");

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onFormSubmit = data => {
    console.log(data);
  };

  const onRegistrationClick = () => {
    history.push(ROUTES.userRegistration);
  }

  const renderModal = () => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="sign-in-modal"
      >
        <div className="sign-in-container">
          <div className="sign-in-header-container">
            <h3 className="sign-in-header">Вхід у систему</h3>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <label className="sign-in-label">Електронна пошта</label>
            <input
              name="email"
              className="sign-in-field"
              ref={register({ required: true })}
            />
            {errors.email && <p className="log-in-validation">Введіть адресу електронної пошти</p>}

            <label className="sign-in-label">Пароль</label>
            <input
              type="password"
              name="password"
              className="sign-in-field"
              ref={register({ required: true })}
            />
            {errors.password && <p className="log-in-validation">Введіть пароль</p>}

            <div className="sign-in-submit">
              <input
                type="submit"
                className="sign-in-submit-button"
                value="Увійти"
              />
              <div className="sign-in-undo" onClick={handleCloseModal}>
                Назад
              </div>
            </div>
          </form>
        </div>
      </Modal>
    );
  };

  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="logo-container">
          <img src={logo} className="header-logo" alt="logo" />
        </div>
        <ul className="list-container">
          <li className="list-container__link"><Link to={ROUTES.landing} className="list-container-route">Головна</Link></li>
          <li className="list-container__link"><Link to={ROUTES.vanishedPets} className="list-container-route">Зниклі тварини</Link></li>
          <li className="list-container__link"><Link to={ROUTES.shelter} className="list-container-route">Приют</Link></li>
          <li className="list-container__link"><Link to={ROUTES.careCheck} className="list-container-route">Перевірка догляду</Link></li>
          <li className="list-container__link"><Link to={ROUTES.petFinder} className="list-container-route">Пошук</Link></li>
        </ul>
        <div className="buttons-container">
          <div className="sign-in button" onClick={handleOpenModal}>
            Вхід
          </div>
          {renderModal()}
          <div className="sign-up button" onClick={onRegistrationClick}>Реєстрація</div>
        </div>
      </div>
    </div>
  );
};


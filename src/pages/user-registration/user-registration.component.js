import React from "react";
import { useForm } from "react-hook-form";

import logo from "../../images/logo.png";
import image from "../../images/reg-page-photo.svg";

import "./user-registration.styles.css";

export const UserRegistration = () => {
  const { register, handleSubmit, errors } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(onFormSubmit)} className="reg-form">
            <div className="google-container">
              <div className="google-registartion user-reg-button">
                Зареєструватсия з допомогою Google
              </div>
            </div>

            <div className="name-container">
              <div className="name-container-field">
                <label className="label">Ім'я</label>
                <input
                  name="firstName"
                  className="name-input input-field"
                  ref={register({ required: true })}
                />
                {errors.firstName && <p className="reg-error">Вкажіть ім'я</p>}
              </div>

              <div className="name-container-field">
                <label className="label">Прізвище</label>
                <input
                  name="lastName"
                  className="name-input input-field"
                  ref={register({ required: true })}
                />
                {errors.lastName && <p className="reg-error">Вкажіть прізвище</p>}
              </div>
            </div>

            <label className="label">Адреса електронної пошти</label>
            <input name="email" className="input-field" ref={register({ required: true })} />
            {errors.email && <p className="reg-error">Вкажіть адресу електронної пошти</p>}

            <label className="label">Пароль</label>
            <input
              type="password"
              name="password"
              className="input-field"
              ref={register({ required: true })}
            />
            {errors.password && <p className="reg-error">Вкажіть пароль</p>}

            <label className="label">Повторіть пароль</label>
            <input
              type="password"
              name="password2"
              className="input-field"
              ref={register({ required: true })}
            />
            {errors.password2 && <p className="reg-error">Повторіть пароль</p>}

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

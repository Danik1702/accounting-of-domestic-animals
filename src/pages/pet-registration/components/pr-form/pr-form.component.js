import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ROUTES } from "../../../../shared/constants/routes.constants";
import API from "../../../../shared/apis/server-api";

import "./pr-form.styles.css";

export const PetRegistrationForm = () => {
  const [breeds, setBreeds] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  useEffect(() => {
    const getBreeds = async () => {
      const breeds = await API.get("/breeds");

      setBreeds(breeds.data);
    };

    getBreeds();
  }, []);

  const renderSelect = () => {
    if (breeds.lengh === 0) {
      return "Немає порід";
    }

    return breeds.map((breed, index) => {
      return (
        <option key={index} className="pr-form-option" value={breed}>
          {breed}
        </option>
      );
    });
  };

  const onUndoClick = () => {
    history.push(ROUTES.userProfile);
  };

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="pr-form-container">
      <form className="pr-form" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="pr-form-header-container">
          <h3 className="pr-form-header">
            Зареєструйте свого домашнього улюбленця
          </h3>
        </div>
        <label className="pr-form-label">Порода</label>
        <select
          name="breed"
          className="pr-form-field pr-form-select"
          ref={register({ required: true })}
        >
          <option disabled value="Виберіть породу">
            Виберіть породу
          </option>
          {renderSelect()}
        </select>
        {errors.breed && (
          <p className="pr-form-validation">Виберіть породу вашої собачки</p>
        )}

        <label className="pr-form-label">Кличка</label>
        <input
          name="name"
          className="pr-form-field"
          ref={register({ required: true })}
        />
        {errors.name && (
          <p className="pr-form-validation">Вкажіть кличку собачки</p>
        )}

        <label className="pr-form-label">Дата народження</label>
        <input
          type="date"
          className="pr-form-date"
          name="birthday"
          ref={register({ required: true })}
        />
        {errors.date && (
          <p className="pr-form-validation">Вкажіть дату народження песика</p>
        )}

        <label className="pr-form-label">Стать</label>
        <div className="pr-form-radio-container">
          <input
            type="radio"
            name="gender"
            value="Хлопчик"
            className="pr-form-radio"
            ref={register({ required: true })}
          />
          <label className="pr-form-radio-text">Хлопчик</label>
        </div>
        <div className="pr-form-radio-container">
          <input
            type="radio"
            name="gender"
            value="Дівчинка"
            className="pr-form-radio"
            ref={register({ required: true })}
          />
          <label className="pr-form-radio-text">Дівчинка</label>
        </div>
        {errors.gender && (
          <p className="pr-form-validation">Вкажіть стать вашої собачки</p>
        )}

        <div className="pr-form-submit-container">
          <input
            type="submit"
            className="pr-form-submit"
            value="Зареєструвати тваринку"
          />
          <div className="pr-form-undo" onClick={onUndoClick}>
            Назад
          </div>
        </div>
      </form>
    </div>
  );
};

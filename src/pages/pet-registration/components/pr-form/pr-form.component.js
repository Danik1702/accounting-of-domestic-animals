import React, { useState, useEffect } from "react";

import API from "../../../../shared/apis/server-api";

import "./pr-form.styles.css";

export const PetRegistrationForm = () => {
  const [breeds, setBreeds] = useState([]);

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

  return (
    <div className="pr-form-container">
      <form className="pr-form">
        <div className="pr-form-header-container">
          <h3 className="pr-form-header">
            Зареєструйте свого домашнього улюбленця
          </h3>
        </div>
        <label className="pr-form-label">Порода</label>
        <select name="breed" className="pr-form-field">
          <option disabled value="Виберіть породу">
            Виберіть породу
          </option>
          {renderSelect()}
        </select>

        <label className="pr-form-label">Кличка</label>
        <input name="name" className="pr-form-fiedl" />

        <label className="pr-form-label">Дата народження</label>
        <input type="date" className="pr-form-date" name="birthday" />

        <label className="pr-form-label">Стать</label>
        <div className="pr-form-radio-container">
          <input type="radio" name="gender" value="Хлопчик" />
          <label className="pr-form-radio-text">Хлопчик</label>
        </div>
        <div className="pr-form-radio-container">
          <input type="radio" name="gender" value="Хлопчик" />
          <label className="pr-form-radio-text">Хлопчик</label>
        </div>

        <div className="pr-form-submit-container">
          <input
            type="submit"
            className="pr-form-submit"
            value="Зареєструвати тваринку"
          />
        </div>
      </form>
    </div>
  );
};

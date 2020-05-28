import React from "react";

import petPhoto from "../../../../images/dog-profile.png";

import "./user-pets.styles.css";

export const UserPets = (props) => {
  const renderPets = () => {
    if (!props.pets.length) {
      return (
        <p className="up-pets-body-text">
          Наразі у вас ще немає щодної зареєстрованої домашньої тваринки
        </p>
      );
    }

    return props.pets.map((pet, index) => {
      return (
        <div className="up-pet-container" key={index}>
          <div className="up-pet-info">
            <img src={petPhoto} className="up-pet-photo" alt="pet" />
            <p className="up-pet-name">{pet.name}</p>
          </div>
          <p className="up-pet-number">{pet.id}</p>
        </div>
      );
    });
  };

  return (
    <div className="up-pets-container">
      <div className="up-pets-header">
        <h3 className="up-pets-header-text">Мої тваринки</h3>
      </div>
      <div className="up-pets-body">{renderPets()}</div>
      <div className="up-pets-add-pet">
        <div className="up-pets-add-pet-button">
          Зареєструвати нову тваринку
        </div>
      </div>
    </div>
  );
};
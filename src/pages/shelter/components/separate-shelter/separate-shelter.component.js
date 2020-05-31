import React from "react";

import "./separate-shelter.styles.css";

export const SeparateShelter = (props) => {
  const renderDogs = () => {
    return props.dogs.map((dog, index) => {
      return (
        <div className="ss-dog" key={index}>
          <div className="ss-dog-image-container">
            <img
              src={dog.imageUrl}
              className="ss-dog-image-container"
              alt="dog"
            />
          </div>
          <div className="ss-dog-name-container">
            <h3 className="ss-dog-name">{dog.name}</h3>
          </div>
          <div className="ss-dog-characteristics">
            <p className="ss-dog-characteristic-value">
              <span className="ss-dog-characteristic-title">Стать: </span>
              {dog.gender}
            </p>
            <p className="ss-dog-characteristic-value">
              <span className="ss-dog-characteristic-title">Вік: </span>
              {dog.age}
            </p>
            <p className="ss-dog-characteristic-value">
              <span className="ss-dog-characteristic-title">Порода: </span>
              {dog.breed}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ss-container">
      <h2 className="ss-header">{props.name}</h2>
      <div className="ss-body">
          {renderDogs()}
      </div>
    </div>
  );
};

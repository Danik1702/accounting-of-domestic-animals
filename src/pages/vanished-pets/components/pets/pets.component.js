import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Characteristic } from "../../../../shared/components/characteristic/characteristic.component";
import { ROUTES } from "../../../../shared/constants/routes.constants";

import "./pets.styles.css";

export const Pets = (props) => {
  const [hidden, setHidden] = useState("hidden");

  const history = useHistory();

  const onInfoClick = () => {
    if (hidden === "hidden") {
      setHidden("visible");
    } else {
      setHidden("hidden");
    }
  };

  const onPetClick = () => {
    history.push(ROUTES.petProfile);
  };

  const renderPets = () => {
    if (!props.vanishedPets.length) {
      return (
        <p className="vp-pets-absence">
          На радість, немає щодної тваринки що пропала.
        </p>
      );
    }

    const vanishedPetsList = () => {
      return props.vanishedPets.map((pet, index) => {
        return (
          <div className="vp-pet" key={pet.id}>
            <div className="vp-main-info" onClick={onPetClick}>
              <div className="pf-pet-image-container">
                <img src={pet.imageUrl} className="pf-pet-image" alt="pet" />
              </div>
              <div className="pf-pet-characteristics">
                <Characteristic title="Кличка" value={pet.name} />
                <Characteristic title="Порода" value={pet.breed} />
                <Characteristic title="Стать" value={pet.gender} />
              </div>
            </div>
            <div className={`vp-details ${hidden}`}>
              <p className="vp-detail">
                <span className="vp-detail-title">Час втрати: </span>
                {props.details[index].loseTime}
              </p>
              <p className="vp-detail">
                <span className="vp-detail-title">Місте втрати: </span>
                {props.details[index].losePlace}
              </p>
              <p className="vp-detail">
                <span className="vp-detail-title">Особливості: </span>
                {props.details[index].loseDetails}
              </p>
            </div>
            <div className="vp-more-info">
              <div className="vp-more-info-button" onClick={onInfoClick}>
                Особливості втрати
              </div>
            </div>
          </div>
        );
      });
    };

    return <div className="vp-pets-container">{vanishedPetsList()}</div>;
  };

  return renderPets();
};

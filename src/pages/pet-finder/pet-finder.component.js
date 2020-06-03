import React, { useEffect, useState } from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { Search } from "./components/search/search.component";
import { Filter } from "./components/filter/filter.component";
import API from "../../shared/apis/server-api";
import { Characteristic } from "../../shared/components/characteristic/characteristic.component";

import "./pet-finder.styles.css";

export const PetFinder = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const petsFromServer = await API.get("/pets");

      setPets(petsFromServer.data);
    };

    getPets();
  }, []);

  const renderPets = () => {
    if (!pets.length) {
      return <div>Зачекайте, собачки загружаються</div>;
    }

    const petsList = () => {
      return pets.map((pet) => {
        return (
          <div className="pf-pet" key={pet.id}>
            <div className="pf-pet-image-container">
              <img src={pet.imageUrl} className="pf-pet-image" alt="pet" />
            </div>
            <div className="pf-pet-characteristics">
              <Characteristic title="Кличка" value={pet.name} />
              <Characteristic title="Порода" value={pet.breed} />
              <Characteristic title="Стать" value={pet.gender} />
            </div>
          </div>
        );
      });
    };

    return <div className="pf-pets-container">{petsList()}</div>;
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="pf-wrapper">
        <div className="pf-header-container">
          <h2 className="pf-header">Знайти</h2>
          <Search onInputChange={onInputChange} />
          <Filter />
          {renderPets()}
        </div>
      </div>
      <Footer />
    </>
  );
};

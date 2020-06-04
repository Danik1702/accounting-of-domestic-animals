import React, { useState, useEffect } from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { Pets } from './components/pets/pets.component';
import API from '../../shared/apis/server-api';

import "./vanished-pets.styles.css";

export const VanishedPets = () => {
  const [vanishedPets, setVanishedPets] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getVanishedPets = async () => {
      const vanished = await API.get('/vanishedPets');

      let vanishedIds = vanished.data.map((pet) => {
        return `id=${pet.id}`;
      });

      vanishedIds = vanishedIds.join('&');

      const petsFromServer = await API.get(`/pets/?${vanishedIds}`);

      setVanishedPets(vanished.data);
      setPets(petsFromServer.data)
    };

    getVanishedPets();
  }, []);

  const logData = () => {
    console.log(pets, vanishedPets);
  }

  return (
    <>
      <Header />
      {logData()}
      <div className="vp-wrapper">
        <div className="vp-header-container">
          <h2 className="vp-header-title">Допоможи знайти</h2>
          <p className="vp-header-text">
            Нижче наведений список домашніх тварин, які загубилися і на даний
            момент знаходяться в розшуку. Якщо ви їх бачили на вулицях вашого
            міста чи маєте якусь корисну інформацію про них - зверніться будь
            ласка до власника тваринки або напишіть нам на пошту.
          </p>
        </div>
        <Pets vanishedPets={pets} details={vanishedPets} />
      </div>
      <Footer />
    </>
  );
};

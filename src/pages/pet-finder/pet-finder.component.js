import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { Search } from "./components/search/search.component";
import { Filter } from "./components/filter/filter.component";
import API from "../../shared/apis/server-api";
import { Characteristic } from "../../shared/components/characteristic/characteristic.component";
import { ROUTES } from "../../shared/constants/routes.constants";

import "./pet-finder.styles.css";

export const PetFinder = () => {
  const [pets, setPets] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState({});
  const [breeds, setBreeds] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const getPets = async () => {
      const petsFromServer = await API.get("/pets");
      const BreedsFromServer = await API.get("/breeds");

      setPets(petsFromServer.data);
      setBreeds(BreedsFromServer.data);
    };

    getPets();
  }, []);

  const onPetClick = () => {
    history.push(ROUTES.petProfile);
  };

  const renderPets = (searchValue, filterValues) => {
    if (!pets.length) {
      return <div>Зачекайте, собачки загружаються</div>;
    }

    const filterAplied = Object.keys(filterValues).length;

    const petsList = () => {
      let petsForRednder = pets;

      if (searchValue) {
        petsForRednder = petsForRednder.filter((pet) => {
          return pet.id.includes(searchValue);
        });
      }

      if (filterAplied) {
        let { gender, petName, breed } = filterValues;
        petName = petName.toLowerCase();
        breed = breed.toLowerCase();
        gender = gender.toLowerCase();

        petsForRednder = petsForRednder.filter((pet) => {
          return (
            pet.name.toLowerCase().includes(petName) &&
            pet.breed.toLowerCase().includes(breed) &&
            pet.gender.toLowerCase().includes(gender)
          );
        });
      }

      return petsForRednder.map((pet) => {
        return (
          <div className="pf-pet" key={pet.id} onClick={onPetClick}>
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

    const petsForRender = petsList();

    if (!petsForRender.length) {
      return (
        <div className="pf-pets-container">
          <h3 className="pf-search-fail">
            За вашим запитом не знайдено результатів. Спробуйте змінити запит.
          </h3>
        </div>
      );
    }

    return <div className="pf-pets-container">{petsForRender}</div>;
  };

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (data) => {
    if (data.gender || data.petName || data.breed) {
      setFilterData(data);
    } else {
      setFilterData({});
    }
  };

  const onUndoFilterClick = () => {
    setFilterData({});
  };

  return (
    <>
      <Header />
      <div className="pf-wrapper">
        <div className="pf-header-container">
          <h2 className="pf-header">Знайти</h2>
          <Search onInputChange={onInputChange} />
          <Filter
            onFormSubmit={onFormSubmit}
            onUndoFilterClick={onUndoFilterClick}
            filterData={filterData}
            breeds={breeds}
          />
          {renderPets(searchValue, filterData)}
        </div>
      </div>
      <Footer />
    </>
  );
};

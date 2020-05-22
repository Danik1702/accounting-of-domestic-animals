import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import API from "../../shared/apis/server-api";
import { DogInfo } from "./components/dog-info/dog-info.component";

import "./care-check-result.styles.css";

export const CareCheckResult = () => {
  const [breed, setBreed] = useState({});

  const careCheckValues = useSelector((state) => state.careCheckReducer);

  useEffect(() => {
    const getBreed = async () => {
      const currentBreed = await API.get(
        `/dogsInfo?breed=${careCheckValues.breed}`
      );

      setBreed(currentBreed.data[0]);
    };

    getBreed();
  }, []);

  //   const cLog = () => {
  //     console.log(breed);
  //   };

  const renderContent = () => {
    if (!breed || !Object.values(breed).length) {
      return <h2 className="ccr-loading">Дані загружаються</h2>;
    }

    return (
      <div className="ccr-wrapper">
        <DogInfo about={breed.about} breed={breed.breed} />
      </div>
    );
  };

  return (
    <div className="care-check-result-page">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
};

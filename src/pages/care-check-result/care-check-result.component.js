import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import API from "../../shared/apis/server-api";
import { DogInfo } from "./components/dog-info/dog-info.component";
import { Analysis } from "./components/analysis/analysis.component";

import "./care-check-result.styles.css";

export const CareCheckResult = (props) => {
  const [breed, setBreed] = useState({});
  const [urlValues, setUrlValues] = useState({});

  const careCheckValues = useSelector((state) => state.careCheckReducer);

  useEffect(() => {
    const getBreed = async () => {
      const currentBreed = await API.get(
        `/dogsInfo?breed=${
          careCheckValues.breed || props.location.state.careCheckValues.breed
        }`
      );

      setBreed(currentBreed.data[0]);
    };

    setUrlValues(props.location.state.careCheckValues);

    getBreed();
  }, []);
  
  const renderContent = () => {
    if (!breed || !Object.values(breed).length) {
      return <h2 className="ccr-loading">Дані загружаються</h2>;
    }

    return (
      <div className="ccr-wrapper">
        <DogInfo about={breed.about} breed={breed.breed} />
        <Analysis
          defaultPetValues={breed.care}
          userPetValues={
            Object.values(careCheckValues).length === 0
              ? urlValues
              : careCheckValues
          }
        />
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

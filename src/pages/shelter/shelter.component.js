import React, { useState, useEffect } from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { ShelterHeader } from "./components/shelter-header/shelter-header.component";
import { SeparateShelter } from "./components/separate-shelter/separate-shelter.component";
import API from "../../shared/apis/server-api";

import "./shelter.styles.css";

export const Shelter = () => {
  const [shelters, setShelters] = useState({});

  useEffect(() => {
    const getShelters = async () => {
      const shelters = await API.get("/shelters");

      setShelters(shelters.data);
    };

    getShelters();
  }, []);

  const renderContent = () => {
    if (!Object.keys(shelters).length) {
      return <div>Загрузка даних</div>;
    }

    return (
      <>
        <Header />
        <div className="shelter-page-wrapper">
          <ShelterHeader />
        </div>
          <SeparateShelter 
            name='ЛКП Лев'
            dogs={shelters.lkpLion}
          />
          <SeparateShelter 
            name='Милосердя'
            dogs={shelters.mercy}
          />
        <Footer />
      </>
    );
  };

  return renderContent();
};

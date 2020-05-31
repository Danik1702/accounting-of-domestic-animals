import React from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { ShelterHeader } from "./components/shelter-header/shelter-header.component";
import { SeparateShelter } from './components/separate-shelter/separate-shelter.component';

import "./shelter.styles.css";

export const Shelter = () => {
  return (
    <>
      <Header />
      <div className="shelter-page-wrapper">
        <ShelterHeader />
        <SeparateShelter />
      </div>
      <Footer />
    </>
  );
};

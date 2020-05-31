import React from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { ShelterHeader } from "./components/shelter-header/shelter-header.component";

import "./shelter.styles.css";

export const Shelter = () => {
  return (
    <>
      <Header />
      <div className="shelter-page-wrapper">
        <ShelterHeader />
      </div>
      <Footer />
    </>
  );
};

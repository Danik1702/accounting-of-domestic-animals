import React from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";

import "./pet-profile.styles.css";

export const PetProfile = () => {
  return (
    <>
      <Header />
      <div className="pp-wrapper"></div>
      <Footer />
    </>
  );
};

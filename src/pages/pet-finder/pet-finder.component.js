import React from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { Search } from "./components/search/search.component";
import { Filter } from "./components/filter/filter.component";

import "./pet-finder.styles.css";

export const PetFinder = () => {
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
          <div className="pf-pets-container"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

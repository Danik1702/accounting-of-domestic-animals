import React from "react";

import "./shelter-header.styles.css";

export const ShelterHeader = () => {
  return (
    <div className="shelter-header-container">
      <h2 className="shelter-header">Знайди друга для всієї сім'ї</h2>
      <p className="shelter-header-description">
        Сервіт Petsy тісно співпрацює з різними собачими притулками Львова та
        львівської області, серед яких є такі як Милосердя, ЛКП Лев та інші.
      </p>
    </div>
  );
};

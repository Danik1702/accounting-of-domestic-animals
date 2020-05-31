import React from "react";

import { Characteristic } from './characteristic/characteristic.component';

import "./additional-info.styles.css";

export const AdditionalInfo = (props) => {
  return (
    <div className="pp-additional-info">
      <p className="pp-additional-info-header">Додаткова інформація</p>
      <div className="pp-additional-info-left">
        <Characteristic />
        <Characteristic />
        <Characteristic />
      </div>
      <div className="pp-additional-info-right">
        <Characteristic />
        <Characteristic />
        <Characteristic />
      </div>
    </div>
  );
};

import React from "react";

import { Characteristic } from "./characteristic/characteristic.component";

import "./care-info.styles.css";

export const CareInfo = (props) => {
  return (
    <div clasName="pp-care-info">
      <Characteristic />
      <Characteristic />
      <Characteristic />
      <Characteristic />
      <Characteristic />
    </div>
  );
};

import React from "react";

import { Characteristic } from "./main-info.characteristic";

import "./main-info.styles.css";

export const MainInfo = (props) => {
  return (
    <div className="pp-main-info">
      <Characteristic />
      <Characteristic />
      <Characteristic />
      <Characteristic />
      <Characteristic />
    </div>
  );
};

import React from "react";

import { Characteristic } from "./main-info.characteristic";

import "./main-info.styles.css";

export const MainInfo = (props) => {
  return (
    <div className="pp-main-info">
      <Characteristic title="Кличка" value={props.name} />
      <Characteristic title="Порода" value={props.breed} />
      <Characteristic title="Вік" value={props.age} />
      <Characteristic title="Стать" value={props.gender} />
      <Characteristic title="Номер" value={props.id} />
    </div>
  );
};

import React from "react";

import { Characteristic } from "./characteristic/characteristic.component";

import "./additional-info.styles.css";

export const AdditionalInfo = (props) => {
  return (
    <div className="pp-additional-info-container">
      <p className="pp-additional-info-header">Додаткова інформація</p>
      <div className="pp-additional-info">
        <div className="pp-additional-info-left">
          <Characteristic title="Дата народження" value={props.info.birth} />
          <Characteristic title="Окрас" value={props.info.color} />
          <Characteristic title="Вага(кг)" value={props.info.weight} />
        </div>
        <div className="pp-additional-info-right">
          <Characteristic title="Висота(см)" value={props.info.height} />
          <Characteristic title="Довжина(см)" value={props.info.width} />
          <Characteristic
            title="Реакція на людей"
            value={props.info.reactionOnPeople}
          />
        </div>
      </div>
      <div className="pp-additional-info-edit-container">
        <div className="pp-additional-info-edit">Редагувати</div>
      </div>
    </div>
  );
};

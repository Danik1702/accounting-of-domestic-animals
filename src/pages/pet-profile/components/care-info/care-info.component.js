import React from "react";

import { Characteristic } from "./characteristic/characteristic.component";

import "./care-info.styles.css";

export const CareInfo = (props) => {
  return (
    <div className="pp-care-info">
      <div className="pp-care-info-header">Особливості догляду</div>
      <Characteristic
        title="Кількість вигулювань в день"
        value={props.care.walkingCount}
      />
      <Characteristic
        title="Час окремого вигулювання(хв)"
        value={props.care.walkingTime}
      />
      <Characteristic
        title="Кількість прийомів їжі"
        value={props.care.mealCount}
      />
      <Characteristic
        title="Кількість їжі(в грамах) на один прийом"
        value={props.care.mealWeight}
      />
      <Characteristic
        title="Кількість медичних чекапів на рік"
        value={props.care.medChecks}
      />
      <div className="pp-care-info-edit-container">
        <div className="pp-care-info-edit">Редагувати</div>
      </div>
    </div>
  );
};

import React from "react";

import { Criterion } from "../criterion/criterion.component";

import "./analysis.styles.css";

export const Analysis = (props) => {
  //   const cLog = () => {
  //     console.log(props.defaultPetValues);
  //     console.log(props.userPetValues);
  //   };

  return (
    <div className="analysis-container">
      <div className="analysis-title-container">
        <h2 className="analysis-title">Аназіл</h2>
      </div>
      <Criterion
        title="Вага"
        measure="кг"
        advice="Збільшити кількість їжі, яку собака споживає протягом дня"
        userPetValue={props.userPetValues.weight}
        defaultPetValue={props.defaultPetValues.weight}
      />
      <Criterion
        title="Кількість вигулювань за день"
        measure=""
        advice="Збільшити кількість вигулювань протягом дня"
        userPetValue={props.userPetValues.walkingCount}
        defaultPetValue={props.defaultPetValues.walkingCount}
      />
      <Criterion
        title="Тривалість окремого вигулювання"
        measure="хв"
        advice="Збільшити час кожного вигулу"
        userPetValue={props.userPetValues.walkingTime}
        defaultPetValue={props.defaultPetValues.walkingTime}
      />
      <Criterion
        title="Кількість прийомів їжі на день"
        measure=""
        advice="Збільшити кількість прийомів їжі собачки"
        userPetValue={props.userPetValues.mealCount}
        defaultPetValue={props.defaultPetValues.mealCount}
      />
      <Criterion
        title="Вага однієї порції їжі в грамах"
        measure="грамм"
        advice="Збільшити кількість їжі в одному прийомі"
        userPetValue={props.userPetValues.mealWeight}
        defaultPetValue={props.defaultPetValues.mealWeight}
      />
      <Criterion
        title="Кількість медичних чекапів на рік"
        measure=""
        advice="Збільшити кількість відвідувань ветеринара"
        userPetValue={props.userPetValues.medChecks}
        defaultPetValue={props.defaultPetValues.medChecks}
      />
    </div>
  );
};

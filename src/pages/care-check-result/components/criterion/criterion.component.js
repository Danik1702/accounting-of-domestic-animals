import React from "react";

import "./criterion.styles.css";

export const Criterion = (props) => {
  const userValue = props.userPetValue.split(" ")[0].split("-");
  const defaultValue = props.defaultPetValue.split("-");

  const getComparisonResult = () => {
    if (defaultValue.length === 1 && userValue.length === 1) {
      return userValue === defaultValue[0];
    }

    if (userValue.length !== 1) {
      return defaultValue >= userValue[0] && defaultValue <= userValue[1];
    }

    if (userValue.length !== 1 && defaultValue.length !== 1) {
      return userValue[0] >= defaultValue[0] && userValue[1] >= defaultValue[1];
    }

    return userValue >= defaultValue[0] && userValue <= defaultValue[1];
  };

  const renderContent = () => {
    const result = getComparisonResult();

    const color = result ? "good" : "bad";

    const renderAdvice = () => {
      if (color === "good") {
        return "";
      }

      return (
        <>
          <p className="criterion-advice-title">Порада</p>
          <p className="criterion-advice-text">{props.advice}</p>
        </>
      );
    };

    return (
      <div className="criterion-container">
        <p className="criterion-title">{props.title}</p>
        <div className={`criterion-body criterion-${color}`}>
          <p
            className={`criterion-user-value criterion-text-${color}`}
          >{`${props.userPetValue} ${props.measure}`}</p>
          <p className="criterion-default-value">{`Норма: ${props.defaultPetValue} ${props.measure}`}</p>
          {renderAdvice()}
        </div>
      </div>
    );
  };

  return renderContent();
};

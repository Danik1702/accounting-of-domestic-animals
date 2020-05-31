import React from "react";

import "./characteristic.styles.css";

export const Characteristic = (props) => {
  return (
    <p className="pp-additional-info-characteristic">
      <span className="pp-additional-info-characteristic-title">
        {props.title}:{" "}
      </span>
      {props.value}
    </p>
  );
};

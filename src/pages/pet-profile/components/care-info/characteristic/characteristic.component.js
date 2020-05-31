import React from "react";

import "./characteristic.styles.css";

export const Characteristic = (props) => {
  return (
    <p className="pp-care-info-characteristic">
      <span className="pp-care-info-characteristic-title">
        {props.title}:{" "}
      </span>
      {props.value}
    </p>
  );
};

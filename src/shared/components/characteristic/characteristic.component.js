import React from "react";

import "./characteristic.styles.css";

export const Characteristic = (props) => {
  return (
    <div className="all-characteristic">
      <p className="all-characteristic-title">{props.title}</p>
      <p className="all-characteristic-value">{props.value}</p>
    </div>
  );
};

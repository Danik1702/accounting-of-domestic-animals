import React from "react";

import "./main-info.characteristic.styles.css";

export const Characteristic = (props) => {
  return (
    <div className="pp-characteristic">
      <p className="pp-characteristic-title">{props.title}</p>
      <p className="pp-characteristic-value">{props.value}</p>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";

import "./care-check-result.styles.css";

export const CareCheckResult = () => {
  const careCheckValues = useSelector((state) => state.careCheckReducer);

  const logV = () => {
    console.log(careCheckValues);
  };

  return (
    <div>
      {logV()}
      Care check result component
    </div>
  );
};

import React from "react";

import "./search.styles.css";

export const Search = (props) => {
  return (
    <div className="pf-search-container">
      <input
        className="pf-search"
        onChange={props.onInputChange}
        placeholder="Унікальний номер тваринки..."
      />
    </div>
  );
};

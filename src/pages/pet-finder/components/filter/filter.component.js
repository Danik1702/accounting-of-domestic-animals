import React from "react";

import "./filter.styles.css";

export const Filter = (props) => {
  return (
    <div className="pf-filter-container">
      <form>
        <div className="pf-filter">
          <div className="pf-separate-filter">
            <label clasName="pf-filter-label">Ім'я та прізвище власника</label>
            <input
              name="name"
              className="pf-filter-field"
              placeholder="Олег Винник..."
            />
          </div>
          <div className="pf-separate-filter">
            <label clasName="pf-filter-label">Кличка тварини</label>
            <input
              name="petName"
              className="pf-filter-field"
              placeholder="Доберман..."
            />
          </div>
          <div className="pf-separate-filter">
            <label clasName="pf-filter-label">Порода собачки</label>
            <input name="breed" className="pf-filter-field" />
          </div>
        </div>
        <div className="pf-filter-submit">
          <input
            type="submit"
            className="pf-filter-submit-button"
            value="Застосувати"
          />
        </div>
      </form>
    </div>
  );
};

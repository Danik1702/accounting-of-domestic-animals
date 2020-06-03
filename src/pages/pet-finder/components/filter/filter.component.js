import React from "react";
import { useForm } from "react-hook-form";

import "./filter.styles.css";

export const Filter = (props) => {
  const { register, handleSubmit } = useForm();

  const renderUndoButton = () => {
    if (!Object.values(props.filterData).length) {
      return;
    }

    return (
      <div className="pf-filter-undo-button" onClick={props.onUndoFilterClick}>
        Скинути фільтр
      </div>
    );
  };

  const renderSelect = () => {
    if (!props.breeds.length) {
      return;
    }

    return props.breeds.map((breed, index) => {
      return (
        <option key={index} value={breed}>
          {breed}
        </option>
      );
    });
  };

  return (
    <div className="pf-filter-container">
      <form onSubmit={handleSubmit(props.onFormSubmit)}>
        <div className="pf-filter">
          <div className="pf-separate-filter">
            <label className="pf-filter-label">Стать песика</label>
            <select className="pf-filter-field" name="gender" ref={register}>
              <option value="Хлопчик">Хлопчик</option>
              <option value="Дівчинка">Дівчинка</option>
            </select>
          </div>
          <div className="pf-separate-filter">
            <label className="pf-filter-label">Кличка тварини</label>
            <input
              name="petName"
              className="pf-filter-field"
              placeholder="Марсік..."
              ref={register}
            />
          </div>
          <div className="pf-separate-filter">
            <label className="pf-filter-label">Порода собачки</label>
            <select name="breed" className="pf-filter-field" ref={register}>
              {renderSelect()}
            </select>
          </div>
        </div>
        <div className="pf-filter-submit">
          <input
            type="submit"
            className="pf-filter-submit-button"
            value="Застосувати"
          />
          {renderUndoButton()}
        </div>
      </form>
    </div>
  );
};

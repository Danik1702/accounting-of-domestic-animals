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

  return (
    <div className="pf-filter-container">
      <form onSubmit={handleSubmit(props.onFormSubmit)}>
        <div className="pf-filter">
          <div className="pf-separate-filter">
            <label className="pf-filter-label">Стать песика</label>
            <input
              name="gender"
              className="pf-filter-field"
              placeholder="Хлопчик.."
              ref={register}
            />
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
            <input name="breed" className="pf-filter-field" ref={register} />
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

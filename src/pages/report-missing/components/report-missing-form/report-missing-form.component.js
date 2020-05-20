import React from "react";
import { useForm } from "react-hook-form";

import "./report-missing-form.styles.css";

export const ReportMissingForm = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  const renderSelect = () => {
    if (props.length === 0) {
      return "Немає тваринок";
    }

    return props.breeds.map((breed, index) => {
      return (
        <option key={index} className="rm-form-option" value={breed}>
          {breed}
        </option>
      );
    });
  };

  return (
    <div className="rm-form">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label className="rm-form-label">Виберіть тваринку яка пропала</label>
        <select className="rm-form-field" name="pet" ref={register}>
          <option disabled value="Виберіть тваринку">
            Виберіть тваринку
          </option>
          {renderSelect()}
        </select>

        <label className="rm-form-label">Вкажіть дату втрати</label>
        <input
          type="date"
          className="rm-form-date"
          name="date"
          ref={register({ required: true })}
        />
        {errors.date && (
          <p className="rm-form-validation">Вкажіть день пропажі</p>
        )}

        <label className="rm-form-label">
          Вкажіть місце де трапилася дана пригода
        </label>
        <input
          className="rm-form-field"
          placeholder="м. Львів, вул. Грінченка..."
          name="place"
          ref={register({ required: true })}
        />
        {errors.place && (
          <p className="rm-form-validation">
            Напишіть місце пропажі(приблизне місце)
          </p>
        )}

        <label className="rm-form-label">
          Детальна інформація про те як сталася пропажа(при яких умовах, куда
          подалася собака і тд)
        </label>
        <textarea
          className="rm-form-field rm-form-textarea"
          name="details"
          ref={register}
        />

        <div className="rm-form-submit-container">
          <input type="submit" value="Надіслати" className="rm-form-submit" />
        </div>
      </form>
    </div>
  );
};

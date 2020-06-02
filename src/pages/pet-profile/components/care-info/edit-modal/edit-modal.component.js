import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import "./edit-modal.styles.css";

Modal.setAppElement("#root");

export const EditModal = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      className="pp-modal"
    >
      <form onSubmit={handleSubmit(props.onFormSubmit)}>
        <label className="pp-edit-label">Кількість вигулювань в день</label>
        <input
          name="walkingCount"
          defaultValue={props.info.walkingCount}
          className="pp-edit-field"
          ref={register}
        />

        <label className="pp-edit-label">Час окремого вигулювання</label>
        <input
          name="walkingTime"
          defaultValue={props.info.walkingTime}
          className="pp-edit-field"
          ref={register}
        />

        <label className="pp-edit-label">Кількість прийомів їжі</label>
        <input
          name="mealCount"
          defaultValue={props.info.mealCount}
          className="pp-edit-field"
          ref={register}
        />

        <label className="pp-edit-label">Кількість їжі(в грамах) на один прийом</label>
        <input
          name="mealWeight"
          defaultValue={props.info.mealWeight}
          className="pp-edit-field"
          ref={register}
        />

        <label className="pp-edit-label">Кількість медичних чекапів на рік</label>
        <input
          name="medChecks"
          defaultValue={props.info.medChecks}
          className="pp-edit-field"
          ref={register}
        />

        <div className="pp-edit-submit">
          <input
            type="submit"
            value="Змінити"
            className="pp-edit-submit-button"
          />
          <div className="pp-edit-undo" onClick={props.handleCloseModal}>
            Скасувати
          </div>
        </div>
      </form>
    </Modal>
  );
};

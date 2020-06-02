import React from "react";

import Modal from "react-modal";

import "./edit-modal.styles.css";

Modal.setAppElement("#root");

export const EditModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      className="pp-modal"
    >
      <form>
        <label className="pp-edit-label">Дата народження</label>
        <input
          name="birth"
          defaultValue={props.info.birth}
          className="pp-edit-field"
        />

        <label className="pp-edit-label">Окрас</label>
        <input
          name="color"
          defaultValue={props.info.color}
          className="pp-edit-field"
        />

        <label className="pp-edit-label">Вага(кг)</label>
        <input
          name="weight"
          defaultValue={props.info.weight}
          className="pp-edit-field"
        />

        <label className="pp-edit-label">Висота(см)</label>
        <input
          name="height"
          defaultValue={props.info.height}
          className="pp-edit-field"
        />

        <label className="pp-edit-label">Довжина(см)</label>
        <input
          name="width"
          defaultValue={props.info.width}
          className="pp-edit-field"
        />

        <label className="pp-edit-label">Реакція на людей</label>
        <input
          name="reactionOnPeople"
          defaultValue={props.info.reactionOnPeople}
          className="pp-edit-field"
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

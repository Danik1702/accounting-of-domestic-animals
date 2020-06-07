import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import "./modal.styles.css";

Modal.setAppElement("#root");

export const SRModal = (props) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      className="sr-modal"
    >
      <div className="sr-modal-container">
        <div className="sr-modal-header">
          <h3 className="sr-modal-header-text">Відгук</h3>
        </div>
        <form onClick={handleSubmit(props.onFormSubmit)}>
          <label className="sr-modal-label">Напишіть відгук знизу</label>
          <textarea
            className="sr-modal-field"
            name="text"
            ref={register({ required: true })}
          />
          {errors.text && (
            <p className="sr-modal-validation">Напишіть текст коментаря</p>
          )}
          <div className="sr-modal-submit">
            <input
              type="submit"
              className="sr-modal-submit-button"
              value="Надіслати"
            />
            <div className="sr-modal-undo" onClick={props.handleCloseModal}>
              Повернутися
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

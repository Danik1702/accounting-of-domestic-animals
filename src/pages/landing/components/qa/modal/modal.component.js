import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import "./modal.styles.css";

Modal.setAppElement("#root");

export const QAModal = (props) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      className="qa-modal"
    >
      <div className="qa-modal-container">
        <div className="qa-modal-header">
          <h3 className="qa-header-text">
            Задайте власне запитання на будь-який смак
          </h3>
        </div>
        <form onSubmit={handleSubmit(props.onFormSubmit)}>
          <label className="qa-modal-label">Задайте ваше питання</label>
          <textarea
            className="qa-modal-field"
            name="question"
            ref={register({ required: true })}
          />
          {errors.question && (
            <p className="qa-modal-validation">Напишіть ваше запитання.</p>
          )}

          <div className="qa-modal-submit">
            <input
              type="submit"
              className="qa-modal-submit-button"
              value="Відправити"
            />
            <div className="qa-modal-undo" onClick={props.handleCloseModal}>
              Повернутися
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

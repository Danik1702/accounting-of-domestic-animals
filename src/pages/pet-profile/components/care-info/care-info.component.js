import React, { useState } from "react";

import { Characteristic } from "./characteristic/characteristic.component";
import { EditModal } from "./edit-modal/edit-modal.component";
import API from "../../../../shared/apis/server-api";

import "./care-info.styles.css";

export const CareInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onFormSubmit = (data) => {
    const changeData = async () => {
      await API.patch("/pets/07400401", { care: { ...data } });
    };

    changeData();
    handleCloseModal();
  };

  return (
    <div className="pp-care-info">
      <div className="pp-care-info-header">Особливості догляду</div>
      <Characteristic
        title="Кількість вигулювань в день"
        value={props.care.walkingCount}
      />
      <Characteristic
        title="Час окремого вигулювання(хв)"
        value={props.care.walkingTime}
      />
      <Characteristic
        title="Кількість прийомів їжі"
        value={props.care.mealCount}
      />
      <Characteristic
        title="Кількість їжі(в грамах) на один прийом"
        value={props.care.mealWeight}
      />
      <Characteristic
        title="Кількість медичних чекапів на рік"
        value={props.care.medChecks}
      />
      <div className="pp-care-info-edit-container">
        <div className="pp-care-info-edit" onClick={handleOpenModal}>
          Редагувати
        </div>
        <EditModal
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          info={props.care}
          onFormSubmit={onFormSubmit}
        />
      </div>
    </div>
  );
};

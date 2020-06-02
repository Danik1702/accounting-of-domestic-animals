import React, { useState } from "react";

import { Characteristic } from "./characteristic/characteristic.component";
import { EditModal } from "./edit-modal/edit-modal.component";
import API from '../../../../shared/apis/server-api';

import "./additional-info.styles.css";

export const AdditionalInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onFormSubmit = data => {
    const changeData = async () => {
      await API.patch('/pets/07400401', { additionalInfo: { ...data } });
    }

    changeData();

    handleCloseModal();
  }


  return (
    <div className="pp-additional-info-container">
      <p className="pp-additional-info-header">Додаткова інформація</p>
      <div className="pp-additional-info">
        <div className="pp-additional-info-left">
          <Characteristic title="Дата народження" value={props.info.birth} />
          <Characteristic title="Окрас" value={props.info.color} />
          <Characteristic title="Вага(кг)" value={props.info.weight} />
        </div>
        <div className="pp-additional-info-right">
          <Characteristic title="Висота(см)" value={props.info.height} />
          <Characteristic title="Довжина(см)" value={props.info.width} />
          <Characteristic
            title="Реакція на людей"
            value={props.info.reactionOnPeople}
          />
        </div>
      </div>
      <div className="pp-additional-info-edit-container">
        <div className="pp-additional-info-edit" onClick={handleOpenModal}>
          Редагувати
        </div>
        <EditModal
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          info={props.info}
          onFormSubmit={onFormSubmit}
        />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import API from '../../../../shared/apis/server-api';
import userIcon from "../../../../images/user.png";

import "./user-profile-header.styles.css";

Modal.setAppElement("#root");

export const UserProfileHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onFormSubmit = (data) => {
    const changeData = async () => {
      const response = await API.patch('/users/1', { additionalInfo: { ...data } });

      console.log(response.data);
    };

    changeData();

    handleCloseModal();
  }

  const renderModal = () => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="up-modal"
      >
        <div className="up-edit-form-container">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <label className="up-edit-label">Ім'я</label>
            <input
              name="firstName"
              defaultValue={props.userInfo.firstName}
              className="up-edit-field"
              ref={register({ required: true })}
            />
            {errors.firstName && <p className="up-edit-error">Вкажіть ваше ім'я</p>}

            <label className="up-edit-label">Прізвище</label>
            <input
              name="lastName"
              defaultValue={props.userInfo.lastName}
              className="up-edit-field"
              ref={register({ required: true })}
            />
            {errors.lastName && <p className="up-edit-error">Вкажіть ваше прізвище</p>}

            <label className="up-edit-label">Вік</label>
            <input
              name="age"
              defaultValue={props.userInfo.age}
              className="up-edit-field"
              ref={register}
            />

            <label className="up-edit-label">Місто</label>
            <input
              name="city"
              defaultValue={props.userInfo.city}
              className="up-edit-field"
              ref={register}
            />

            <label className="up-edit-label">Номер телефону</label>
            <input
              name="phoneNumber"
              defaultValue={props.userInfo.phoneNumber}
              className="up-edit-field"
              ref={register({ required: true })}
            />
            {errors.phoneNumber && <p className="up-edit-error">Вкажіть ваш номер телефону</p>}

            <label className="up-edit-label">Пошта</label>
            <input
              name="email"
              defaultValue={props.userInfo.email}
              className="up-edit-field"
              ref={register({ required: true })}
            />
            {errors.email && <p className="up-edit-error">Вкажіть пошту</p>}

            <div className="up-edit-submit">
              <input
                type="submit"
                value="Змінити"
                className="uo-edit-submit-button"
              />
              <div className="up-edit-undo" onClick={handleCloseModal}>
                Скасувати
              </div>
            </div>
          </form>
        </div>
      </Modal>
    );
  };

  return (
    <div className="up-header-container">
      <div className="up-header-info">
        <img src={userIcon} className="up-user-photo" alt="user" />
        <p className="up-user-name">{`${props.userInfo.firstName} ${props.userInfo.lastName}`}</p>
      </div>
      <div className="up-header-edit" onClick={handleOpenModal}>
        Редагувати
      </div>
      {renderModal()}
    </div>
  );
};

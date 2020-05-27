import React from "react";

import "./user-additional-info.styles.css";

export const UserAdditionalInfo = (props) => {
  return (
    <div className="up-additional-info">
      <div clasName="up-additional-info-header-container">
        <h3 className="up-additional-info-header">Інформація</h3>
      </div>
      <div className="up-additional-info-body">
        <p className="up-additional-info-criterion">
          <span className="up-additional-info-criterion-title">Ім'я: </span>
          {props.userInfo.firstName}
        </p>
        <p className="up-additional-info-criterion">
          <span className="up-additional-info-criterion-title">Прізвище: </span>
          {props.userInfo.lastName}
        </p>
        <p className="up-additional-info-criterion">
          <span className="up-additional-info-criterion-title">Вік: </span>
          {props.userInfo.age}
        </p>
        <p className="up-additional-info-criterion">
          <span className="up-additional-info-criterion-title">Місто: </span>
          {props.userInfo.city}
        </p>
        <p className="up-additional-info-criterion">
          <span className="up-additional-info-criterion-title">
            Номер телефону:{" "}
          </span>
          {props.userInfo.phoneNumber}
        </p>
        <p className="up-additional-info-criterion">
          <span className="up-additional-info-criterion-title">Пошта: </span>
          {props.userInfo.email}
        </p>
      </div>
    </div>
  );
};

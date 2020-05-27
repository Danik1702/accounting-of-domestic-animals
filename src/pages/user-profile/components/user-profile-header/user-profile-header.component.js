import React from "react";

import userIcon from "../../../../images/user.png";

import "./user-profile-header.styles.css";

export const UserProfileHeader = props => {
  return (
    <div className="up-header-container">
      <div className="up-header-info">
        <img src={userIcon} className="up-user-photo" alt="user" />
        <p className="up-user-name">{`${props.firstName} ${props.lastName}`}</p>
      </div>
      <div className="up-header-edit">Редагувати</div>
    </div>
  );
};

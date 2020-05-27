import React, { useState, useEffect } from "react";

import API from "../../shared/apis/server-api";
import { UserProfileHeader } from "./components/user-profile-header/user-profile-header.component";
import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { UserPets } from "./components/user-pets/user-pets.component";
import { UserAdditionalInfo } from "./components/user-additional-info/user-additional-info.component";

import "./user-profile.styles.css";

export const UserProfile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const info = await API.get("/users/1");

      setUserData(info.data);
    };

    getUserData();
  }, []);

  const renderHelper = () => {
    if (!Object.keys(userData).length) {
      return <div>Дані загружаютсья</div>;
    }

    return (
      <>
        <Header />
        <div className="up-wrapper">
          <UserProfileHeader
            firstName={userData.additionalInfo.firstName}
            lastName={userData.additionalInfo.lastName}
          />
          <div className="up-content">
            <UserPets />
            <UserAdditionalInfo userInfo={userData.additionalInfo} />
          </div>
        </div>
        <Footer />
      </>
    );
  };

  return renderHelper();
};

import React, { useState, useEffect } from "react";

import API from "../../shared/apis/server-api";
import { UserProfileHeader } from "./components/user-profile-header/user-profile-header.component";
import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";

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
        <div className="user-profile-wrapper">
          <UserProfileHeader
            firstName={userData.additionalInfo.firstName}
            lastName={userData.additionalInfo.lastName}
          />
        </div>
        <Footer />
      </>
    );
  };

  // const logData = () => {
  //   console.log(userData);
  // };

  return renderHelper();
};

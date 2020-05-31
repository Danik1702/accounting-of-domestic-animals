import React, { useState, useEffect } from "react";

import API from "../../shared/apis/server-api";
import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { PageHeader } from "./components/page-header/page-header.component";
import { MainInfo } from "./components/main-info/main-info.component";
import { AdditionalInfo } from "./components/additional-info/additional-info.component";
import { CareInfo } from "./components/care-info/care-info.component";

import "./pet-profile.styles.css";

export const PetProfile = () => {
  const [pet, setPet] = useState({});
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getPetInfo = async () => {
      const petInfo = await API.get("/pets/07400401");
      const userInfoServer = await API.get(`/users/${petInfo.data.userId}`);

      setPet(petInfo.data);
      setUserInfo(userInfoServer.data);
    };

    getPetInfo();
  }, []);

  const renderContent = () => {
    if (!Object.keys(pet).length || !Object.keys(userInfo).length) {
      return <div>Зачекайте, дані грузяться</div>;
    }

    return (
      <>
        <Header />
        <div className="pp-wrapper">
          <PageHeader
            petPhoto={pet.imageUrl}
            name={`${userInfo.additionalInfo.firstName} ${userInfo.additionalInfo.lastName}`}
          />
          <MainInfo
            name={pet.name}
            breed={pet.breed}
            age={pet.age}
            gender={pet.gender}
            id={pet.id}
          />
          <AdditionalInfo info={pet.additionalInfo} />
          <CareInfo care={pet.care} />
        </div>
        <Footer />
      </>
    );
  };

  return renderContent();
};

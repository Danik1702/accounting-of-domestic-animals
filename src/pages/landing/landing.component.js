import React, { useState } from "react";

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { LandingMenu } from "./components/landing-menu/landing-menu.component";
import { AboutUs } from "./components/about-us/about-us.component";
import { Goal } from "./components/goal/goal.component";
import { ServiceRating } from "./components/service-rating/service-rating.component";

import "./landing.styles.css";

export const Landing = () => {
  const [landingNumber, setLandingNumber] = useState(0);

  const onLandingMenuClick = (event) => {
    if (event.target.tagName === "LI") {
      const menuLinksArray = document.querySelectorAll(
        ".landing-menu__list__item"
      );

      for (let i = 0; i < menuLinksArray.length; i++) {
        if (event.target === menuLinksArray[i]) {
          setLandingNumber(i);
        }
      }
    }
  };

  const renderHelper = () => {
    switch (landingNumber) {
      case 0:
        return <AboutUs />;
      case 1:
        return <Goal />;
      case 2:
        return <ServiceRating />;
      default:
        return "Something went wrong..";
    }
  };

  return (
    <div className="landing">
      <Header />
      <div className="banner-container">
        <div className="banner-text-container">
          <h1 className="banner-text">
            Комфортніше життя вашого улюбленця разом з
            <span className="banner-company-name"> Petsy</span>
          </h1>
        </div>
      </div>
      <LandingMenu onLandingMenuClick={onLandingMenuClick} />
      {renderHelper()}
      <Footer />
    </div>
  );
};

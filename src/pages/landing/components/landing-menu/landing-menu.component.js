import React from "react";

import "./landing-menu.styles.css";

export const LandingMenu = (props) => {
  const active = 'landing-menu-active';
  const passive = 'landing-menu-passive';

  return (
    <div className="landing-menu">
      <ul className="landing-menu__list" onClick={props.onLandingMenuClick}>
        <li className={`landing-menu__list__item ${props.landingNumber === 0 ? active : passive}`}>Про нас</li>
        <li className={`landing-menu__list__item ${props.landingNumber === 1 ? active : passive}`}>Наша мета</li>
        <li className={`landing-menu__list__item ${props.landingNumber === 2 ? active : passive}`}>Оцінка сервісу</li>
        <li className={`landing-menu__list__item ${props.landingNumber === 3 ? active : passive}`}>Відвповіді на запитання</li>
      </ul>
    </div>
  );
};

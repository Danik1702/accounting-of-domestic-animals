import React from "react";

import './landing-menu.styles.css';

export const LandingMenu = props => {
  return (
    <div className="landing-menu">
        <ul className="landing-menu__list" onClick={props.onLandingMenuClick}>
            <li className="landing-menu__list__item">Про нас</li>
            <li className="landing-menu__list__item">Наша мета</li>
            <li className="landing-menu__list__item">Оцінка сервісу</li>
            <li className="landing-menu__list__item">Відвповіді на запитання</li>
        </ul>
    </div>
  );
};

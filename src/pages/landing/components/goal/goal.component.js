import React from "react";

import "./goal.styles.css";

export const Goal = () => {
  return (
    <div className="goal-container">
      <h2 className="goal__title">Мета</h2>
      <p className="goal__text">
        Ми мріємо щоб всі домашні тваринки в україні були зареєстровані в
        системі Petsy.
      </p>
      <p className="goal__text">
        Наша головна мета це донести людям користь і потрібність даного сервісу,
        що він буде надійним джерелом інформації та підтримки для кожного
        власника домашнього улюбленця і звичайно ж зробити спільне життя
        тваринок і людей комфортнішим.
      </p>
      <p className="goal__text">
        Кожна собачка, чи то котик, чи більш екзотичні домашні тваринки мають
        право на щасливе життя, так само і їхні господарі, і ми гарантуємо що
        докладемо максимум зусиль для того щоб це було реальністю кожного.
      </p>
    </div>
  );
};

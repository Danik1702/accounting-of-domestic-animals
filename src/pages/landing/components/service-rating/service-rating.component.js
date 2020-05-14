import React from "react";

import rating from "../../../../images/rating.png";
import user from "../../../../images/user.png";

import "./service-rating.styles.css";

export const ServiceRating = () => {
  return (
    <div className="container">
      <div className="rating-container">
        <h3 className="rating__title">Оцініть сервіс</h3>
        <div className="rating__icons">
          <img src={rating} className="rating__icon" alt="rating-icon" />
          <img src={rating} className="rating__icon" alt="rating-icon" />
          <img src={rating} className="rating__icon" alt="rating-icon" />
          <img src={rating} className="rating__icon" alt="rating-icon" />
          <img src={rating} className="rating__icon" alt="rating-icon" />
        </div>
      </div>
      <div className="reviews-container">
        <div className="reviews-title-container">
          <h3 className="review__title">Відгуки користувачів</h3>
          <div className="add-review-button">Написати</div>
        </div>
        <div className="reviews">
          <div className="review">
            <div className="review-info-container">
              <img src={user} className="user-icon" alt="user-icon" />
              <p className="user-name">Андрій Антоненко</p>
              <p className="review-time">02.05.2020</p>
            </div>
            <div className="review-text-container">
              <p className="review__text">
                Надзвичайно крутий сервіс! Задоволений на 100%. Пілся реєстрації
                зажив новим життям разом зі своїм песиком - Борисом. Раджу всім!
              </p>
            </div>
          </div>

          <div className="review">
            <div className="review-info-container">
              <img src={user} className="user-icon" alt="user-icon" />
              <p className="user-name">Олег Винник</p>
              <p className="review-time">07.04.2020</p>
            </div>
            <div className="review-text-container">
              <p className="review__text">
                Надзвичайно крутий сервіс! Задоволений на 100%. Пілся реєстрації
                зажив новим життям разом зі своїм песиком - Борисом. Раджу всім!
              </p>
            </div>
          </div>

          <div className="review">
            <div className="review-info-container">
              <img src={user} className="user-icon" alt="user-icon" />
              <p className="user-name">Івасик Телесик</p>
              <p className="review-time">10.04.2020</p>
            </div>
            <div className="review-text-container">
              <p className="review__text">
                Надзвичайно крутий сервіс! Задоволений на 100%. Пілся реєстрації
                зажив новим життям разом зі своїм песиком - Борисом. Раджу всім!
              </p>
            </div>
          </div>
        </div>
        <div className="more-container">
          <div className="more-button">Більше відгуків</div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import rating from "../../../../images/rating.png";
import user from "../../../../images/user.png";
import API from "../../../../shared/apis/server-api";
import { SRModal } from "./modal/modal.component";
import { ROUTES } from "../../../../shared/constants/routes.constants";

import "./service-rating.styles.css";

export const ServiceRating = () => {
  const [reviews, setReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const getReviews = async () => {
      const reviewsFromServer = await API.get("/reviews");

      setReviews(reviewsFromServer.data);
    };

    getReviews();
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onUserClick = () => {
    history.push(ROUTES.userProfile);
  };

  const onFormSubmit = (data) => {
    const serverObject = {
      ...data,
      id: reviews.length + 1,
      userId: 1,
      userName: "Андрій Макаренко",
      date: new Date().toLocaleString(),
    };

    const setData = async () => {
      await API.post("/reviews", serverObject);
    };

    setData();
    handleCloseModal();
  };

  const renderReviews = () => {
    if (!reviews.length) {
      return (
        <p className="sr-review-loading">Зачекайте, коментарі завантажуються</p>
      );
    }

    return reviews.map((review) => {
      return (
        <div className="review" key={review.id}>
          <div className="review-info-container">
            <img src={user} className="user-icon" alt="user-icon" />
            <p className="user-name" onClick={onUserClick}>
              {review.userName}
            </p>
            <p className="review-time">{review.date}</p>
          </div>
          <div className="review-text-container">
            <p className="review__text">{review.text}</p>
          </div>
        </div>
      );
    });
  };

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
          <div className="add-review-button" onClick={handleOpenModal}>
            Написати
          </div>
          <SRModal
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            onFormSubmit={onFormSubmit}
          />
        </div>
        <div className="reviews">{renderReviews()}</div>
        <div className="more-container">
          <div className="more-button">Більше відгуків</div>
        </div>
      </div>
    </div>
  );
};

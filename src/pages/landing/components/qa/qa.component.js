import React, { useState, useEffect } from "react";

import API from "../../../../shared/apis/server-api";
import { QAModal } from "./modal/modal.component";

import "./qa.styles.css";

export const QA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questionsAnswers, setQuestionsAnswers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await API.get("/qa");

      setQuestionsAnswers(response.data);
    };

    getData();
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onFormSubmit = (data) => {
    const setData = async () => {
      API.post("/usersQuestions", { question: data.question });
    };

    setData();

    handleCloseModal();
  };

  const renderQuestionsAnswers = () => {
    if (!questionsAnswers.length) {
      return <p className="qa-loading">Зачекайте, дані завантажуються.</p>;
    }

    return questionsAnswers.map((qa) => {
      return (
        <div className="qa" key={qa.id}>
          <div className="question-container">
            <h4 className="question-title">Запитання:</h4>
            <p className="question-text">{qa.question}</p>
          </div>
          <div className="answer-container">
            <h4 className="answer-title">Відповідь:</h4>
            <p className="answer-text">{qa.answer}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="qas-container">
      <div className="qa-wrapper">
        <div className="qa-title-container">
          <h3 className="qa-title">Відповіді на розповсюджені запитання</h3>
          <div className="own-questyon-button" onClick={handleOpenModal}>
            Задати власне питання
          </div>
          <QAModal
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            onFormSubmit={onFormSubmit}
          />
        </div>
        <div className="qa-container">{renderQuestionsAnswers()}</div>
        <div className="more-button-container">
          <div className="more-button">Більше</div>
        </div>
      </div>
    </div>
  );
};

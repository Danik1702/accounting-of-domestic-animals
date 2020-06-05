import React from "react";

import "./qa.styles.css";

export const QA = () => {
  return (
    <div className="qas-container">
      <div className="qa-wrapper">
        <div className="qa-title-container">
          <h3 className="qa-title">Відповіді на розповсюджені запитання</h3>
          <div className="own-questyon-button">Задати власне питання</div>
        </div>
        <div className="qa-container">
          <div className="qa">
            <div className="question-container">
              <h4 className="question-title">Запитання:</h4>
              <p className="question-text">
                Що робити коли котик мітить територію?
              </p>
            </div>
            <div className="answer-container">
              <h4 className="answer-title">Відповідь:</h4>
              <p className="answer-text">
                Якщо кішка початку мітити меблі і кути в будинку, перш за все,
                необхідно звернутися до ветеринарного лікаря, щоб виключити
                можливі захворювання. Якщо ніяких хвороб не буде виявлено, то
                необхідно знайти джерело стресу для кішки і усунути його.
                Надайте котикові впевненості, забезпечте улюблениці додаткові
                місця для їжі, пиття, сну, ігор, туалету – можливо, це допоможе
                знизити потребу мітити територію.
              </p>
            </div>
          </div>
          <div className="qa">
            <div className="question-container">
              <h4 className="question-title">Запитання:</h4>
              <p className="question-text">Песик гризе диван, що робити?</p>
            </div>
            <div className="answer-container">
              <h4 className="answer-title">Відповідь:</h4>
              <p className="answer-text">
                Відбити бажання гризти або дряпати дерев'яні меблі можна за
                допомогою таких народних засобів: Цитрусові, м'ята. Якщо для
                людини подібні запахи приємні і асоціюються зі свіжістю і
                чистотою, то у кішок вони викликають огиду. Застосовувати їх
                можна в форматі ефірних олій, і в свіжому вигляді. Наприклад,
                потріть поверхню дерев'яних меблів цедрою будь-якого
                цитрусового. Медичний спирт. Запах цієї речовини не подобається
                всім - як людям, так і тваринам. В засіб догляду за дерев'яними
                предметами інтер'єр додайте трохи спирту. В результаті кішки і
                собаки будуть обходити меблі стороною. Оцет. Ця рідина має
                сильний, різкий запах, який тваринам зовсім не до душі. У
                концентрованому вигляді наносити його не рекомендується, так як
                є ймовірність псування дерев'яної поверхні. Гострий перець. Це
                результативний метод в разі, якщо нічого вищевказане не
                допомагає. Перець провокує подразнення слизової, але ніяк не
                впливає на стан здоров'я домашнього улюбленця. Однак будьте
                обережні і ви. На слизову людини він впливає аналогічно, як і на
                слизову тварини.
              </p>
            </div>
          </div>
        </div>
        <div className="more-button-container">
          <div className="more-button">Більше</div>
        </div>
      </div>
    </div>
  );
};

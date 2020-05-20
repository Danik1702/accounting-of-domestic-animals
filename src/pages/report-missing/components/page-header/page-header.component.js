import React from "react";

import "./page-header.styles.css";

export const PageHeader = () => {
  return (
    <div className="page-header-container">
      <h2 className="page-header">Повідомлення про пропажу собачки</h2>
      <p className="page-header-text">
        Ми постараємося допомогти вам у такий непростий момент, проте, щоб з
        нашого боку допомога була якнайширшою і швидко принесла результат,
        просимо надати дуже детальну інформацію щодо пропажі вашого члена сім’ї.
      </p>
    </div>
  );
};

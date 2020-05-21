import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import API from "../../shared/apis/server-api";
import dogPhoto from "../../images/care-page-dog.svg";
import { careCheckValues } from '../../store/care-check/actions/care-check.actions';

import "./care-check.styles.css";

export const CareCheck = () => {
  const [breeds, setBreeds] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getBreeds = async () => {
      const breedsFromServer = await API.get("/breeds");

      setBreeds(breedsFromServer.data);
    };

    getBreeds();
  }, []);

  const onFormSubmit = (data) => {
    dispatch(careCheckValues(data));

    history.push('/care-check-result');
  };

  const renderSelect = () => {
    if (breeds.length === 0) {
      return "Немає порід";
    }

    return breeds.map((breed, index) => {
      return (
        <option key={index} className="cc-form-option" value={breed}>
          {breed}
        </option>
      );
    });
  };

  const renderPageHeader = () => {
    return (
      <div className="cc-header-container">
        <h2 className="cc-header">
          На скільки добре ви піклуєтесь про свого собаку?
        </h2>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="cc-form-wrapper">
          <div className="cc-form-left">
            <div className="cc-form-photo">
              <img src={dogPhoto} alt="dog" className="cc-photo" />
            </div>

            <label className="cc-form-label">Виберіть породу собачки</label>
            <select
              className="cc-form-field"
              name="breed"
              ref={register({ required: true })}
            >
              <option disabled value="Виберіть породу">
                Виберіть породу
              </option>
              {renderSelect()}
            </select>
            {errors.breed && (
              <p className="cc-form-error">
                Будь-ласка виберіть породу собачки
              </p>
            )}

            <label className="cc-form-label">Вага в кілограмах</label>
            <input
              className="cc-form-field cc-input-field"
              name="weight"
              ref={register({ required: true })}
            />
            {errors.weight && (
              <p className="cc-form-error">Будь-ласка вкажіть вагу собачки</p>
            )}
          </div>

          <div className="cc-form-right">
            <label className="cc-form-label mt-0">
              Кількість вигулів на день
            </label>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="walkingCount"
                value="1 раз"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">1 раз</label>
              <br />
            </div>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="walkingCount"
                value="2-3 рази"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">2-3 рази</label>
              <br />
            </div>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="walkingCount"
                value="більше 3-ох разів"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">Більше 3-ох разів</label>
            </div>
            {errors.walkingCount && (
              <p className="cc-form-error">
                Будь-ласка вкажіть кількість вигулювань
              </p>
            )}

            <label className="cc-form-label">Час окремого вигулювання</label>
            <input
              className="cc-form-field cc-input-field"
              name="walkingTime"
              ref={register({ required: true })}
            />
            {errors.walkingTime && (
              <p className="cc-form-error">Будь-ласка час окремого вигулу</p>
            )}

            <label className="cc-form-label">
              Кількість прийомів їжі на день
            </label>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="mealCount"
                value="1 прийом"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">1 прийом</label>
              <br />
            </div>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="mealCount"
                value="2 прийоми"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">2 прийоми</label>
              <br />
            </div>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="mealCount"
                value="3 прийоми"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">3 прийоми</label>
              <br />
            </div>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="mealCount"
                value="більше 3-ох прийомів"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">Більше 3-ох прийомів</label>
            </div>
            {errors.mealCount && (
              <p className="cc-form-error">
                Будь-ласка вкажіть кількість прийомів їжі
              </p>
            )}

            <label className="cc-form-label">
              Приблизна вага порції в грамах
            </label>
            <input
              className="cc-form-field cc-input-field"
              name="mealWeight"
              ref={register({ required: true })}
            />
            {errors.mealWeight && (
              <p className="cc-form-error">
                Будь-ласка вкажіть вагу порції їжі в грамах
              </p>
            )}

            <label className="cc-form-label">
              Кількість мед. чекапів на рік
            </label>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="medChecks"
                value="0"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">0</label>
              <br />
            </div>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="medChecks"
                value="1-2 рази"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">1-2 рази</label>
              <br />
            </div>
            <div className="cc-form-radio-container">
              <input
                type="radio"
                name="medChecks"
                value="більше 2-ох разів"
                className="cc-form-radio"
                ref={register({ required: true })}
              />
              <label className="cc-radio-label">Більше 2-ох разів</label>
            </div>
            {errors.medChecks && (
              <p className="cc-form-error">
                Будь-ласка вкажіть кількість візитів до ветеринара щороку
              </p>
            )}
          </div>
        </div>
        <div className="cc-form-submit">
          <input
            type="submit"
            className="cc-form-submit-button"
            value="Дізнатися результат"
          />
        </div>
      </form>
    );
  };

  return (
    <>
      <Header />
      <div className="cc-wrapper">
        {renderPageHeader()}
        {renderForm()}
      </div>
      <Footer />
    </>
  );
};

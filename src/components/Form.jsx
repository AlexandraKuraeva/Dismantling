import React, { useState } from 'react';
import SentForm from './SentForm';

const Form = ({
  setSubmitForm,
  isSent,
  handleSubmit,
  formValues,
  handleInputChange,
  formErrors,
}) => {
  return (
    <div className="form__wrapper">
      <div className="form__left">
        <h3 className="form__subtitle">
          Перезвоним Вам в течение <span>30</span> минут!
        </h3>
        <p>Консультация бесплатно</p>
      </div>
      <div className="form__right">
        <div className="form__inputs">
          <div className="input__box">
            <input
              type="text"
              className="form__input input"
              placeholder="Ваше имя"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <span>{formErrors.name}</span>}
            {/* Если есть ошибка в поле name, то выводим ее */}
          </div>
          <div className="input__box">
            {' '}
            <input
              type="text"
              className="form__input input"
              placeholder="Телефон"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
            />
            {formErrors.phone && <span>{formErrors.phone}</span>}
          </div>

          <div className="input__box">
            <input
              type="text"
              className="form__input input"
              placeholder="e-mail"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
            {/* Если есть ошибка в поле email, то выводим ее */}
          </div>
        </div>
        <button type="submit" className="form__btn btn" onClick={(event) => handleSubmit(event)}>
          Получить консультацию
        </button>
      </div>
    </div>
  );
};

export default Form;

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
  const [modalActive, setModalActive] = useState(false); // добавляем состояние для отображения модального окна

  const handleSubmitForm = (event) => {
    console.log('dd');
    handleSubmit(event); // вызываем функцию, которая отправляет данные формы
    setModalActive(true); // устанавливаем состояние, которое показывает модальное окно
  };

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
          <input type="text" className="form__input input" placeholder="Телефон" />
          <input type="text" className="form__input input" placeholder="e-mail" />
        </div>
        <button type="submit" className="form__btn btn" onClick={(event) => handleSubmit(event)}>
          Получить консультацию
        </button>
      </div>
    </div>
  );
};

export default Form;

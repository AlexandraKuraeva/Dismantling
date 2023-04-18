import React, { useState } from 'react';
import SentForm from './SentForm';

const Form = ({ setSubmitForm, isSent }) => {
  const [modalActive, setModalActive] = useState(false); // добавляем состояние для отображения модального окна

  const handleSubmitForm = () => {
    console.log('dd');
    setSubmitForm(true); // вызываем функцию, которая отправляет данные формы
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
          <input type="text" className="form__input input" placeholder="Ваше имя" />
          <input type="text" className="form__input input" placeholder="Телефон" />
          <input type="text" className="form__input input" placeholder="e-mail" />
        </div>
        <button
          className="form__btn btn"
          onClick={() => {
            handleSubmitForm;
          }}
        >
          Получить консультацию
        </button>
      </div>
      {isSent && ( // проверяем, отправлена ли форма
        <SentForm active={modalActive} setActive={setModalActive} /> // показываем модальное окно
      )}
    </div>
  );
};

export default Form;

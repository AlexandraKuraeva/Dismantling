import React, {useState} from 'react';
import SentForm from './SentForm';

const Modal = ({
  active,
  setActive,
  isSent,
  setSubmitForm,
  validateForm,
  formValues,
  handleInputChange,
  formErrors,
  handleSubmit,
}) => {
  return !isSent ? (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__inner">
          <h3 className="modal__title">Получить консультацию</h3>
          <input
            type="text"
            className="modal__input input"
            placeholder="Ваше имя"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
          {/* Если есть ошибка в поле name, то выводим ее */}
          <input
            type="text"
            className="modal__input input"
            placeholder="Телефон"
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
          />
          {formErrors.phone && <span>{formErrors.phone}</span>}

          <input
            type="text"
            className="modal__input input"
            placeholder="e-mail"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
          {/* Если есть ошибка в поле email, то выводим ее */}

          <button type="submit" className="modal__btn btn" onClick={(event) => handleSubmit(event)}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  ) : (
    <SentForm setActive={setActive} active={active} isSent={isSent} />
  );
};

export default Modal;

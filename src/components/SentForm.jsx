import React from 'react';

const SentForm = ({ setSubmitForm, isSent }) => {
  return (
    <div className={isSent ? 'modal active' : 'modal'} onClick={() => setSubmitForm(false)}>
      <div
        className={isSent ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__inner">
          <h3 className="modal__title">Заявка отправлена</h3>
        </div>
      </div>
    </div>
  );
};

export default SentForm;

import React from 'react';

const SentForm = ({setActive, active}) => {

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
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

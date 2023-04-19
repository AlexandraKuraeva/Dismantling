import { useState, useEffect } from 'react';
import './App.scss';
import Content from './components/Content';
import SentForm from './components/SentForm';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false); //модальное окно-форма
  const [isSent, setSubmitForm] = useState(false); //модальное окно-"Отправлено"

  const [formErrors, setFormErrors] = useState({}); //наличие ошибок
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
  });
  useEffect(() => {
    if (modalActive || isSent) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }

    return () => {
      document.body.classList.remove('noscroll');
    };
  }, [isSent, modalActive]);
  function validateForm(values) {
    let errors = {};

    if (!values.name) {
      errors.name = 'Введите имя';
    }

    if (!values.email) {
      errors.email = 'Введите email';
    }

    if (!values.phone) {
      errors.phone = 'Введите телефон';
    }

    return errors;
  }
  //Отчистка формы
  const resetFormValues = () => {
    console.log('очистить');
    setFormValues({
      name: '',
      email: '',
      phone: '',
    });
  };
  //введенные пользователем данные записываются  в state
  const handleInputChange = (event) => {
	setFormErrors({});
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log('поверка формы');
    event.preventDefault();

    //проводится проверка полей на пустоту
    const errors = validateForm(formValues);

    //если ошибок нет, то...
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      setModalActive(false); // скрыть модальную форму, если она отображается
      setSubmitForm(true); //отобразить сообщение об отправке
      resetFormValues(); //очистка формы
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="App">
      <Header setActive={setModalActive} />
      <Content
        isSent={isSent}
        handleSubmit={handleSubmit}
        formValues={formValues}
        handleInputChange={handleInputChange}
        formErrors={formErrors}
      />
      <Modal
        formErrors={formErrors}
        active={modalActive}
        setActive={setModalActive}
        isSent={isSent}
        validateForm={validateForm}
        formValues={formValues}
        handleInputChange={handleInputChange} //проверка при вводе
        handleSubmit={handleSubmit}
      />
      <SentForm isSent={isSent} setSubmitForm={setSubmitForm} />
    </div>
  );
}

export default App;

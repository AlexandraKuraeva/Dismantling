import { useState } from 'react';
import './App.scss';
import Content from './components/Content';

import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false); //модальное окно формы для заполнения
  const [isSent, setSubmitForm] = useState(false); //модальное окно "Отправлено"
  //Отправка формы
 
const [formErrors, setFormErrors] = useState({});
 const [formValues, setFormValues] = useState({
   name: '',
   email: '',
   phone: '',
 });

  
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


 

 const handleInputChange = (event) => {
   const { name, value } = event.target;
   setFormValues({ ...formValues, [name]: value });
 };


 const handleSubmit = (event) => {
   event.preventDefault();

   const errors = validateForm(formValues);

   if (Object.keys(errors).length === 0) {
     setFormErrors({});
     setModalActive(false);
     setSubmitForm(true);
   } else {
     setFormErrors(errors);
   }
 };


  return (
    <div className="App">
      <Header setActive={setModalActive} />
      <Content isSent={isSent} setSubmitForm={handleSubmit}  />
      <Modal
        formErrors={formErrors}
        active={modalActive}
        setActive={setModalActive}
        isSent={isSent}
        setSubmitForm={handleSubmit}
        validateForm={validateForm}
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

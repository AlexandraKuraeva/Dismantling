import React from 'react';
import '../scss/content.scss';
import desc from '../assets/img/desc.jpeg';
import Modal from './Modal';
import SliderComments from './Slider';
import Gallery from './WorkFoto';
import Form from './Form';

const Content = ({
  setSubmitForm,
  isSent,
  handleSubmit,
  validateForm,
  formValues,
  handleInputChange,
  formErrors 
}) => {
  return (
    <main className="main">
      <section className="top">
        <div className="container">
          <div className="top__wrapper">
            <h1 className="top__title ">
              <span>Демонтаж</span> без границ: сносим любые препятствия!
            </h1>
            <p>
              Наша компания занимается сносом зданий и сооружений любой сложности, и мы готовы
              выполнить любую работу быстро и качественно.
            </p>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="container">
          <h2 className="title">О компании</h2>
          <div className="description__wrapper">
            <div className="description__img">
              <img src={desc} alt="контентное изображение" />
            </div>

            <div className="description__content">
              <h4 className="description__subtitle">
                "Компания "Снос"- демонтаж с профессиональной точностью!"
              </h4>
              <p>
                Компания "Снос" — опытная команда специалистов, занимающихся разрушением и
                демонтажем различных зданий и сооружений. Мы работаем на рынке уже более 10 лет и за
                это время накопили огромный опыт в проведении разнообразных работ по сносу и
                демонтажу. Наша компания оказывает услуги по демонтажу как крупных, так и мелких
                зданий. Мы профессионально подходим к выполнению каждого проекта, вне зависимости от
                его масштабов.
              </p>
              <p>
                Наша цель – предоставить нашим клиентам качественные услуги по сносу и демонтажу,
                выполненные в точных сроках. Мы гарантируем безупречное качество работ и
                индивидуальный подход к каждому клиенту. Вы можете быть уверены, что работа будет
                выполнена быстро, профессионально и безопасно. С нами вы можете быть уверены в том,
                что ваш проект будет реализован эффективно и с минимальными затратами. Обратитесь к
                нам и мы поможем вам осуществить любые задумки по разрушению и демонтажу зданий.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="slider-comments">
        <div className="container">
          <h2 className="title">Отзывы</h2>
          <SliderComments />
        </div>
      </section>
      <section className="form">
        <div className="container">
          <Form
            setSubmitForm={setSubmitForm}
            isSent={isSent}
            handleSubmit={handleSubmit}
            formValues={formValues}
            handleInputChange={handleInputChange}
            formErrors={formErrors}
          />
        </div>
      </section>
      <section className="gallery">
        <div className="container">
          <h2 className="title">Наша работа</h2>
        </div>
        <Gallery />
      </section>
    </main>
  );
};

export default Content;

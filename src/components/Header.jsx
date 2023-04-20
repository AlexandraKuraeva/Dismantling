import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
// import decor from '../assets/img/2.jpg';

const Header = ({ setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }

    return () => {
      document.body.classList.remove('noscroll');
    };
  }, [isOpen]);

  const openModal = ()=>{
	setActive(true);
	 setIsOpen(false);
  }

  return (
    <header className="header">
      {/* <img className="header__decor" src={decor} alt="" /> */}
      <div className="container">
        <div className="header__wrapper">
          <a className="header__logo logo" href="#">
            <img src={logo} alt="logo" />
          </a>

          <ul className={isOpen ? ' menu open' : 'menu'}>
            <li className="menu__item">
              <a href="#">О компании</a>
            </li>
            <li className="menu__item">
              <a href="#">Наша работа</a>
            </li>
            <li className="menu__item">
              <a href="#">Техника</a>
            </li>

            <li className="menu__item">
              <a href="#">Контакты</a>
            </li>
          </ul>

          <a className="header__btn btn " onClick={() => openModal()}>
            Получить консультацию
          </a>
          <button className="header__menu-toggle " type="button" onClick={() => setIsOpen(!isOpen)}>
            <div className={isOpen ? 'toggler open' : 'toggler'}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="logo" to="/">
          <span className="logo-mark" />
          <span>LegioN</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/services">Услуги</NavLink>
          <NavLink to="/about">О компании</NavLink>
          <NavLink to="/documents">Документы</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
          <NavLink to="/quiz">Квиз</NavLink>
        </nav>
        <div className="cta">
          <a href="tel:+73832123456" className="button-cta">+7 (383) 212-34-56</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

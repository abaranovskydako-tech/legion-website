import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <h3>LegioN</h3>
            <p>Аутсорсинг персонала в Новосибирске и области. На объект за 3 часа или в течение 2 дней.</p>
          </div>
          <div>
            <h4>Навигация</h4>
            <p><Link to="/services">Услуги</Link></p>
            <p><Link to="/about">О компании</Link></p>
            <p><Link to="/documents">Документы</Link></p>
            <p><Link to="/contacts">Контакты</Link></p>
            <p><Link to="/quiz">Квиз</Link></p>
          </div>
          <div>
            <h4>Контакты</h4>
            <p>Новосибирск, ул. Примерная, 1</p>
            <p><a href="tel:+73832123456">+7 (383) 212-34-56</a></p>
            <p><a href="mailto:sales@legion.ru">sales@legion.ru</a></p>
          </div>
        </div>
        <small>© {new Date().getFullYear()} LegioN. Все права защищены.</small>
      </div>
    </footer>
  );
};

export default Footer;

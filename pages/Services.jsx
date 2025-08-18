import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, price, items, description, icon, features, popular }) => (
  <div className={`service-card ${popular ? 'popular' : ''}`}>
    {popular && <div className="popular-badge">🔥 Популярно</div>}
    <div className="service-header">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="service-price">
        <span className="price-amount">от {price} ₽</span>
        <span className="price-period">/час</span>
      </div>
    </div>
    
    <p className="service-description">{description}</p>
    
    <div className="service-features">
      {features.map((feature, i) => (
        <div key={i} className="feature-item">
          <span className="feature-check">✓</span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
    
    <div className="service-items">
      <h4>Что входит в услугу:</h4>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
    
    <Link to="/contacts" className="service-cta">
      <span>Заказать {title.toLowerCase()}</span>
      <span className="cta-arrow">→</span>
    </Link>
  </div>
);

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'Все услуги' },
    { id: 'warehouse', name: 'Складские' },
    { id: 'production', name: 'Производство' },
    { id: 'retail', name: 'Ритейл' },
    { id: 'events', name: 'Мероприятия' }
  ];

  const services = [
    {
      title: "Грузчики",
      price: "350",
      description: "Профессиональные грузчики для любых задач по погрузке и разгрузке",
      icon: "📦",
      category: "warehouse",
      features: ["Физически подготовленные", "Опыт работы", "Соблюдение ТБ"],
      items: ['Погрузка/разгрузка', 'Перемещение грузов', 'Подсобные работы', 'Упаковка/распаковка'],
      popular: true
    },
    {
      title: "Комплектовщики",
      price: "380",
      description: "Специалисты по сбору и комплектации заказов на складе",
      icon: "📋",
      category: "warehouse",
      features: ["Внимательность", "Знание номенклатуры", "Быстрота"],
      items: ['Сбор заказов', 'Маркировка товаров', 'Паллетирование', 'Проверка качества']
    },
    {
      title: "Упаковщики",
      price: "360",
      description: "Специалисты по упаковке и подготовке товаров к отправке",
      icon: "🎁",
      category: "warehouse",
      features: ["Аккуратность", "Знание стандартов", "Производительность"],
      items: ['Фасовка товаров', 'Стикеровка', 'Термоусадка', 'Упаковка в коробки']
    },
    {
      title: "Производственные рабочие",
      price: "400",
      description: "Универсальные рабочие для производственных линий",
      icon: "⚙️",
      category: "production",
      features: ["Техническая грамотность", "Опыт на производстве", "Исполнительность"],
      items: ['Работа на конвейере', 'Контроль качества', 'Упаковка продукции', 'Подготовка сырья']
    },
    {
      title: "Продавцы-консультанты",
      price: "450",
      description: "Временный персонал для торговых точек и магазинов",
      icon: "🛒",
      category: "retail",
      features: ["Коммуникабельность", "Знание товара", "Опыт в продажах"],
      items: ['Консультация клиентов', 'Выкладка товаров', 'Работа с кассой', 'Инвентаризация']
    },
    {
      title: "Промоутеры и хостес",
      price: "500",
      description: "Персонал для мероприятий, выставок и промо-акций",
      icon: "🎉",
      category: "events",
      features: ["Привлекательная внешность", "Коммуникабельность", "Опыт работы с людьми"],
      items: ['Раздача листовок', 'Проведение опросов', 'Встреча гостей', 'Помощь в организации']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <main>
      <section className="services-hero">
        <div className="container">
          <div className="services-header">
            <h1>Наши услуги</h1>
            <p className="services-subtitle">
              Подберём и выведем персонал под ваши задачи: склад, производство, ритейл, мероприятия.
              <br />Гарантируем качество и соблюдение сроков.
            </p>
          </div>

          <div className="services-categories">
            {serviceCategories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-container">
            {filteredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Нужен персонал не из списка?</h2>
            <p>Мы подберём специалистов под любые ваши задачи. Просто опишите, что нужно сделать.</p>
            <Link to="/contacts" className="button-primary">
              Обсудить задачу
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

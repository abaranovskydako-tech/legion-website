import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [heroFormData, setHeroFormData] = useState({
    name: '',
    phone: '',
    workType: ''
  });

  const [calculatorData, setCalculatorData] = useState({
    employees: 5,
    shiftHours: 8,
    package: 'start'
  });

  const [proposalFormData, setProposalFormData] = useState({
    name: '',
    phone: ''
  });

  const handleHeroFormChange = (e) => {
    setHeroFormData({
      ...heroFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleCalculatorChange = (e) => {
    setCalculatorData({
      ...calculatorData,
      [e.target.name]: e.target.value
    });
  };

  const handleProposalFormChange = (e) => {
    setProposalFormData({
      ...proposalFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    console.log('Hero form submitted:', heroFormData);
    alert('Заявка отправлена! Мы свяжемся с вами в течение 10 минут.');
  };

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();
    console.log('Calculator form submitted:', calculatorData);
    alert('Заявка на расчёт отправлена! Мы свяжемся с вами в течение 10 минут.');
  };

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    console.log('Proposal form submitted:', proposalFormData);
    alert('Заявка отправлена! Мы свяжемся с вами в течение 10 минут.');
  };

  // Расчёт стоимости для мини-калькулятора
  const calculateBudget = () => {
    const basePrice = 350; // базовая цена за час
    const employees = parseInt(calculatorData.employees);
    const shiftHours = parseInt(calculatorData.shiftHours);
    
    let packageMultiplier = 1.0;
    if (calculatorData.package === 'peak') packageMultiplier = 1.2;
    if (calculatorData.package === 'constant') packageMultiplier = 1.1;
    
    return Math.round(basePrice * employees * shiftHours * packageMultiplier);
  };

  const workTypes = [
    'Грузчики',
    'Комплектовщики', 
    'Уборщики',
    'Упаковщики',
    'Подсобные рабочие',
    'Специалисты'
  ];

  const packages = [
    {
      id: 'start',
      name: 'Старт',
      features: [
        '5 сотрудников',
        'Смена от 6 ч',
        'Медкнижки'
      ],
      price: 'от 350 ₽/час'
    },
    {
      id: 'peak',
      name: 'Пик-сезон',
      features: [
        '150+ сотрудников',
        'Координатор',
        'Замены без простоев'
      ],
      price: 'от 400 ₽/час'
    },
    {
      id: 'constant',
      name: 'Постоянный поток',
      features: [
        'SLA и KPI',
        'Гибкое ценообразование',
        'Отчётность'
      ],
      price: 'от 450 ₽/час'
    }
  ];

  return (
    <main>
      {/* Hero-блок */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-headline">
                Персонал от 350 ₽/час — на объект за 3 часа или 2 дня
              </h1>
              
              <p className="hero-subheadline">
                Новосибирск и область. Грузчики, комплектовщики, уборщики и другие роли. 
                Скорость, качество, юридическая чистота, масштабируемость.
              </p>
              
              <div className="hero-badges">
                <div className="hero-badge">24/7</div>
                <div className="hero-badge">Медкнижки</div>
                <div className="hero-badge">Смена от 6 ч</div>
                <div className="hero-badge">72 часа запуск</div>
              </div>
              
              <div className="hero-cta">
                <button className="button-primary" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
                  Рассчитать стоимость
                </button>
                <Link to="/services" className="button-secondary">
                  Смотреть услуги
                </Link>
              </div>
            </div>

            <div className="hero-form">
              <div className="hero-form-card">
                <h3>Быстрая заявка</h3>
                <form onSubmit={handleHeroSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      value={heroFormData.name}
                      onChange={handleHeroFormChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      value={heroFormData.phone}
                      onChange={handleHeroFormChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <select
                      name="workType"
                      value={heroFormData.workType}
                      onChange={handleHeroFormChange}
                      required
                      className="form-select"
                    >
                      <option value="">Выберите тип работ</option>
                      {workTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button type="submit" className="form-submit">
                    Оставить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section className="advantages">
        <div className="container">
          <div className="advantages-grid">
            <div className="advantage-item">
              <div className="advantage-icon">👥</div>
              <div className="advantage-number">200+</div>
              <div className="advantage-label">сотрудников в штате</div>
            </div>
            
            <div className="advantage-item">
              <div className="advantage-icon">⚡</div>
              <div className="advantage-number">72 часа</div>
              <div className="advantage-label">запуск объекта</div>
            </div>
            
            <div className="advantage-item">
              <div className="advantage-icon">✅</div>
              <div className="advantage-number">99%</div>
              <div className="advantage-label">смен вовремя</div>
            </div>
            
            <div className="advantage-item">
              <div className="advantage-icon">🕒</div>
              <div className="advantage-number">24/7</div>
              <div className="advantage-label">поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Мини-калькулятор */}
      <section className="calculator" id="calculator">
        <div className="container">
          <div className="calculator-content">
            <div className="calculator-text">
              <h2>Рассчитайте стоимость персонала</h2>
              <p>Быстрая оценка бюджета для вашего проекта</p>
            </div>
            
            <div className="calculator-form">
              <form onSubmit={handleCalculatorSubmit}>
                <div className="calculator-fields">
                  <div className="form-group">
                    <label>Сколько сотрудников требуется?</label>
                    <input
                      type="number"
                      name="employees"
                      min="1"
                      max="100"
                      value={calculatorData.employees}
                      onChange={handleCalculatorChange}
                      className="calculator-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Сколько часов смена?</label>
                    <input
                      type="number"
                      name="shiftHours"
                      min="1"
                      max="24"
                      value={calculatorData.shiftHours}
                      onChange={handleCalculatorChange}
                      className="calculator-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Пакет услуг</label>
                    <select
                      name="package"
                      value={calculatorData.package}
                      onChange={handleCalculatorChange}
                      className="calculator-select"
                    >
                      {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="budget-estimate">
                  <div className="budget-label">Оценка бюджета:</div>
                  <div className="budget-amount">{calculateBudget().toLocaleString()} ₽</div>
                </div>
                
                <div className="calculator-actions">
                  <button type="submit" className="button-primary">
                    Получить точный расчёт
                  </button>
                  <button type="button" className="button-secondary">
                    Обратный звонок
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Пакеты услуг */}
      <section className="service-packages">
        <div className="container">
          <div className="packages-header">
            <h2>Пакеты услуг</h2>
            <p>Выберите подходящий вариант для вашего бизнеса</p>
          </div>
          
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                </div>
                
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <button 
                  className="package-cta"
                  onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                >
                  Запросить расчёт
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Социальный пруф */}
      <section className="social-proof">
        <div className="container">
          <div className="proof-content">
            <div className="proof-item">
              <div className="proof-platform">Яндекс</div>
              <div className="proof-rating">Рейтинг 4.8</div>
              <div className="proof-count">120 отзывов</div>
            </div>
            
            <div className="proof-item">
              <div className="proof-platform">Avito</div>
              <div className="proof-rating">300+ заказов</div>
              <div className="proof-count">Высокий рейтинг</div>
            </div>
            
            <div className="proof-item">
              <div className="proof-platform">2ГИС</div>
              <div className="proof-rating">Проверенный подрядчик</div>
              <div className="proof-count">Официальный статус</div>
            </div>
          </div>
          
          <div className="proof-cta">
            <button className="button-secondary">
              Смотреть отзывы
            </button>
          </div>
        </div>
      </section>

      {/* Форма "Получите предложение за 10 минут" */}
      <section className="proposal-section">
        <div className="container">
          <div className="proposal-content">
            <div className="proposal-text">
              <h2>Получите предложение за 10 минут</h2>
              
              <div className="proposal-utp">
                <div className="utp-item">
                  <span className="utp-icon">⚖️</span>
                  <span>Юридическая чистота</span>
                </div>
                <div className="utp-item">
                  <span className="utp-icon">🎓</span>
                  <span>Подбор и обучение персонала</span>
                </div>
                <div className="utp-item">
                  <span className="utp-icon">👨‍💼</span>
                  <span>Координатор на объекте</span>
                </div>
              </div>
            </div>
            
            <div className="proposal-form">
              <form onSubmit={handleProposalSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={proposalFormData.name}
                    onChange={handleProposalFormChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={proposalFormData.phone}
                    onChange={handleProposalFormChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <button type="submit" className="form-submit">
                  Получить предложение
                </button>
                
                <p className="form-disclaimer">
                  Мы перезвоним в течение 10 минут
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

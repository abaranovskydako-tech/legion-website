import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    task: '',
    company: '',
    urgency: 'standard'
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Show success message or redirect
  };

  const scrollToForm = () => {
    setIsFormVisible(true);
    document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="hero">
        {/* Hero Background with Visual Hierarchy */}
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="container">
          {/* Main Hero Content */}
          <div className="hero-content">
            {/* Left Column - Value Proposition */}
            <div className="hero-text">
              {/* Primary Headline with Clear B2B Focus */}
              <div className="hero-badge">🚀 Новосибирск</div>
              <h1 className="hero-headline">
                <span className="highlight">Персонал для бизнеса</span><br />
                <span className="main-focus">за 3 часа</span>
              </h1>
              
              {/* Strong Subheadline with Business Benefits */}
              <p className="hero-subheadline">
                <strong>Решаем кадровые задачи компаний Новосибирска:</strong><br />
                от 5 до 150 сотрудников, смена от 6 часов, работаем 24/7
              </p>
              
              {/* Trust Indicators and Benefits */}
              <div className="hero-benefits">
                <div className="benefit-item primary">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-text">
                    <strong>Выезд за 3 часа</strong>
                    <span>Гарантированно</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-text">
                    <strong>Полная ответственность</strong>
                    <span>Договор + гарантии</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📋</div>
                  <div className="benefit-text">
                    <strong>Закрывающие документы</strong>
                    <span>Бухгалтерия довольна</span>
                  </div>
                </div>
              </div>

              {/* Primary CTA Section */}
              <div className="hero-cta">
                <button 
                  className="button-primary cta-main" 
                  onClick={scrollToForm}
                >
                  <span className="cta-text">Заказать персонал</span>
                  <span className="cta-subtext">Бесплатная консультация</span>
                </button>
                
                <div className="cta-secondary">
                  <Link to="/services" className="button-secondary">
                    Узнать больше
                  </Link>
                  <div className="cta-phone">
                    <span>Или позвоните:</span>
                    <a href="tel:+73830000000" className="phone-link">+7 (383) 000-00-00</a>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="hero-social-proof">
                <div className="trust-badges">
                  <span className="trust-badge">✓ 8 лет на рынке</span>
                  <span className="trust-badge">✓ 500+ довольных клиентов</span>
                  <span className="trust-badge">✓ Лицензия №12345</span>
                </div>
              </div>
            </div>

            {/* Right Column - Lead Capture Form */}
            <div className="hero-form-container">
              <div className="lead-form-card" id="lead-form">
                <div className="form-header">
                  <div className="form-badge">🔥 Специальное предложение</div>
                  <h3>Получить персонал за 3 часа</h3>
                  <p>Оставьте заявку, мы перезвоним в течение <strong>15 минут</strong></p>
                </div>
                
                <form className="lead-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Ваше имя *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Телефон *</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Название компании</label>
                    <input
                      className="form-input"
                      type="text"
                      name="company"
                      placeholder="ООО Рога и Копыта"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Срочность *</label>
                    <select 
                      className="form-select" 
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="standard">Стандартно (3-6 часов)</option>
                      <option value="urgent">Срочно (1-3 часа)</option>
                      <option value="emergency">Экстренно (до 1 часа)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Опишите задачу *</label>
                    <textarea
                      className="form-textarea"
                      name="task"
                      placeholder="Например: Нужны 10 грузчиков для разгрузки фуры, 2 часа работы, завтра с 9:00"
                      value={formData.task}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <button className="form-submit" type="submit">
                    <span className="submit-text">Получить персонал</span>
                    <span className="submit-guarantee">Гарантия 100%</span>
                  </button>
                  
                  <p className="form-disclaimer">
                    Нажимая кнопку, вы соглашаетесь с 
                    <Link to="/documents" className="link"> политикой обработки персональных данных</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Stats Section with Enhanced Visual Impact */}
          <div className="hero-stats">
            <div className="stats-header">
              <h2>Почему выбирают нас</h2>
            </div>
            <div className="stats-grid">
              <div className="stat-item primary">
                <div className="stat-icon">⏰</div>
                <div className="stat-number">3 часа</div>
                <div className="stat-label">Выезд бригады</div>
                <div className="stat-description">Максимальное время ожидания</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">👥</div>
                <div className="stat-number">150+</div>
                <div className="stat-label">Сотрудников в резерве</div>
                <div className="stat-description">Готовы к работе 24/7</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">8 лет</div>
                <div className="stat-label">Опыт в аутсорсинге</div>
                <div className="stat-description">Знаем все нюансы</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">✅</div>
                <div className="stat-number">99%</div>
                <div className="stat-label">Закрытие смен вовремя</div>
                <div className="stat-description">Надежность и качество</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

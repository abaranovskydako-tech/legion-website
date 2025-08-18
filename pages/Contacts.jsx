import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    task: '',
    urgency: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        task: '',
        urgency: 'standard'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Адрес',
      content: 'Новосибирск, ул. Красный проспект, 35',
      link: 'https://maps.google.com',
      linkText: 'Открыть на карте'
    },
    {
      icon: '📞',
      title: 'Телефон',
      content: '+7 (383) 212-34-56',
      link: 'tel:+73832123456',
      linkText: 'Позвонить'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'sales@legion.ru',
      link: 'mailto:sales@legion.ru',
      linkText: 'Написать'
    },
    {
      icon: '🕒',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
      link: null,
      linkText: null
    }
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', time: '9:00 - 18:00' },
    { day: 'Суббота', time: '10:00 - 16:00' },
    { day: 'Воскресенье', time: 'Выходной' },
    { day: 'Экстренные вызовы', time: '24/7' }
  ];

  return (
    <main>
      <section className="contacts-hero">
        <div className="container">
          <div className="contacts-header">
            <h1>Свяжитесь с нами</h1>
            <p className="contacts-subtitle">
              Нужен персонал? Оставьте заявку, и мы свяжемся с вами в течение 15 минут.
              <br />Или используйте любой удобный способ связи.
            </p>
          </div>
        </div>
      </section>

      <section className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            {/* Контактная информация */}
            <div className="contact-info">
              <h2>Контактная информация</h2>
              
              <div className="contact-cards">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{contact.icon}</div>
                    <div className="contact-details">
                      <h3>{contact.title}</h3>
                      <p>{contact.content}</p>
                      {contact.link && (
                        <a 
                          href={contact.link} 
                          className="contact-link"
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="working-hours">
                <h3>Режим работы</h3>
                <div className="hours-list">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{schedule.day}</span>
                      <span className="time">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="emergency-contact">
                <div className="emergency-badge">🚨 Экстренные вызовы</div>
                <p>Для срочных заявок звоните в любое время:</p>
                <a href="tel:+73832123456" className="emergency-phone">+7 (383) 212-34-56</a>
              </div>
            </div>

            {/* Форма обратной связи */}
            <div className="contact-form">
              <div className="form-card">
                <div className="form-header">
                  <h2>Оставить заявку</h2>
                  <p>Заполните форму, и мы свяжемся с вами в течение 15 минут</p>
                </div>

                {submitSuccess ? (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Заявка отправлена!</h3>
                    <p>Мы свяжемся с вами в течение 15 минут для обсуждения деталей.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-fields">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Имя *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div className="form-group">
                        <label>Телефон *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ivan@company.ru"
                        />
                      </div>
                      <div className="form-group">
                        <label>Компания</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Название компании"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Срочность *</label>
                      <select
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
                      <label>Опишите задачу *</label>
                      <textarea
                        name="task"
                        value={formData.task}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        placeholder="Например: Нужны 5 грузчиков для разгрузки фуры, 3 часа работы, завтра с 9:00"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                    </button>

                    <p className="form-disclaimer">
                      Нажимая кнопку, вы соглашаетесь с 
                      <a href="/documents" className="link"> политикой обработки персональных данных</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;

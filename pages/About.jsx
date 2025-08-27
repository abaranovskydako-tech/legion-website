import React from 'react';
import Link from 'next/link';

const About = () => {
  const achievements = [
    { number: '8+', label: 'Лет на рынке', description: 'С 2016 года помогаем бизнесу' },
    { number: '500+', label: 'Довольных клиентов', description: 'От малого до крупного бизнеса' },
    { number: '150+', label: 'Сотрудников в резерве', description: 'Готовы к работе 24/7' },
    { number: '99%', label: 'Выполнение в срок', description: 'Гарантируем качество' }
  ];

  const team = [
    { name: 'Александр Петров', position: 'Генеральный директор', experience: '10+ лет в HR' },
    { name: 'Мария Сидорова', position: 'Руководитель отдела персонала', experience: '8+ лет подбора' },
    { name: 'Дмитрий Козлов', position: 'Координатор проектов', experience: '5+ лет координации' }
  ];

  const values = [
    { icon: '⚡', title: 'Быстрота', description: 'Решаем задачи в день обращения' },
    { icon: '🛡️', title: 'Надёжность', description: 'Гарантируем качество и сроки' },
    { icon: '🤝', title: 'Партнёрство', description: 'Долгосрочные отношения с клиентами' },
    { icon: '📈', title: 'Развитие', description: 'Постоянно улучшаем сервис' }
  ];

  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <div className="about-header">
            <h1>О компании LegioN</h1>
            <p className="about-subtitle">
              Мы — лидер в сфере B2B-аутсорсинга линейного персонала в Новосибирске. 
              <br />Работаем по принципу «взял ответственность — выполнил».
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Наша миссия</h2>
              <p>
                Помогать бизнесу Новосибирска решать кадровые вопросы быстро, качественно и без головной боли. 
                Мы берём на себя все заботы по подбору, оформлению и координации персонала, 
                чтобы вы могли сосредоточиться на своих основных задачах.
              </p>
              <div className="mission-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎯</span>
                  <span>Фокус на результате</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💼</span>
                  <span>Профессиональный подход</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌍</span>
                  <span>Локальная экспертиза</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <h3>Что мы делаем</h3>
                <ul>
                  <li>Подбираем персонал под ваши задачи</li>
                  <li>Оформляем официально с документами</li>
                  <li>Координируем работу на объекте</li>
                  <li>Гарантируем качество и замены</li>
                  <li>Решаем вопросы 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <div className="container">
          <h2>Наши достижения</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
                <div className="achievement-description">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>Наши ценности</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Команда профессионалов</h2>
          <p className="team-subtitle">
            Наша команда — это опытные HR-специалисты, которые знают рынок труда Новосибирска 
            и понимают потребности бизнеса.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <span className="avatar-placeholder">{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <div className="member-position">{member.position}</div>
                <div className="member-experience">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы работать с нами?</h2>
            <p>Оставьте заявку, и мы свяжемся с вами в течение 15 минут для обсуждения деталей.</p>
            <div className="cta-buttons">
              <Link href="/contacts" className="button-primary">
                Оставить заявку
              </Link>
              <Link href="/services" className="button-secondary">
                Посмотреть услуги
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

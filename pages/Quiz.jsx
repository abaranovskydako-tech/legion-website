import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    people: 1,
    workType: '',
    urgency: 'standard',
    shiftHours: 8,
    startDate: '',
    startTime: '09:00',
    endTime: '18:00',
    location: '',
    specialRequirements: '',
    name: '',
    phone: '',
    company: ''
  });

  const [calculation, setCalculation] = useState(null);

  const workTypes = [
    { id: 'loaders', name: 'Грузчики', basePrice: 350, description: 'Погрузка, разгрузка, перемещение грузов' },
    { id: 'packers', name: 'Упаковщики', basePrice: 360, description: 'Фасовка, стикеровка, упаковка товаров' },
    { id: 'assemblers', name: 'Комплектовщики', basePrice: 380, description: 'Сбор заказов, маркировка, паллетирование' },
    { id: 'helpers', name: 'Подсобные рабочие', basePrice: 320, description: 'Общие складские и производственные работы' },
    { id: 'specialists', name: 'Специалисты', basePrice: 450, description: 'Квалифицированный персонал с опытом' }
  ];

  const urgencyMultipliers = {
    standard: { name: 'Стандартно (6-12 часов)', multiplier: 1.0, description: 'Обычный режим работы' },
    urgent: { name: 'Срочно (3-6 часов)', multiplier: 1.3, description: 'Приоритетное обслуживание' },
    emergency: { name: 'Экстренно (до 3 часов)', multiplier: 1.6, description: 'Максимально быстро' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculatePrice = () => {
    const selectedWorkType = workTypes.find(wt => wt.id === formData.workType);
    const selectedUrgency = urgencyMultipliers[formData.urgency];
    
    if (!selectedWorkType) return null;

    const basePrice = selectedWorkType.basePrice;
    const urgencyMultiplier = selectedUrgency.multiplier;
    const peopleCount = parseInt(formData.people);
    const shiftHours = parseInt(formData.shiftHours);
    
    const totalPrice = basePrice * urgencyMultiplier * peopleCount * shiftHours;
    const pricePerPerson = totalPrice / peopleCount;
    
    return {
      basePrice,
      urgencyMultiplier,
      peopleCount,
      shiftHours,
      totalPrice,
      pricePerPerson,
      urgencyName: selectedUrgency.name,
      workTypeName: selectedWorkType.name
    };
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
  };
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculatePrice();
    setCalculation(result);
    setCurrentStep(5);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="quiz-step">
            <h3>Сколько человек требуется?</h3>
            <div className="people-selector">
              <div className="people-input">
                <input
                  type="number"
                  name="people"
                  min="1"
                  max="100"
                  value={formData.people}
                  onChange={handleInputChange}
                  className="quiz-input"
                />
                <span className="people-label">человек</span>
              </div>
              <div className="people-presets">
                <button
                  type="button"
                  className={`preset-btn ${formData.people === 5 ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, people: 5 }))}
                >
                  5
                </button>
                <button
                  type="button"
                  className={`preset-btn ${formData.people === 10 ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, people: 10 }))}
                >
                  10
                </button>
                <button
                  type="button"
                  className={`preset-btn ${formData.people === 20 ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, people: 20 }))}
                >
                  20
                </button>
                <button
                  type="button"
                  className={`preset-btn ${formData.people === 50 ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, people: 50 }))}
                >
                  50
                </button>
              </div>
            </div>
            <button type="button" className="button-primary" onClick={handleNextStep}>
              Далее
            </button>
          </div>
        );

      case 2:
        return (
          <div className="quiz-step">
            <h3>Выберите тип работ</h3>
            <div className="work-types">
              {workTypes.map((workType) => (
                <div
                  key={workType.id}
                  className={`work-type-card ${formData.workType === workType.id ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, workType: workType.id }))}
                >
                  <div className="work-type-header">
                    <h4>{workType.name}</h4>
                    <div className="work-type-price">от {workType.basePrice} ₽/час</div>
                  </div>
                  <p>{workType.description}</p>
                </div>
              ))}
            </div>
            <div className="step-navigation">
              <button type="button" className="button-secondary" onClick={handlePrevStep}>
                Назад
              </button>
              <button 
                type="button" 
                className="button-primary" 
                onClick={handleNextStep}
                disabled={!formData.workType}
              >
                Далее
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="quiz-step">
            <h3>Укажите срочность и время</h3>
            <div className="urgency-selection">
              <h4>Срочность:</h4>
              <div className="urgency-options">
                {Object.entries(urgencyMultipliers).map(([key, urgency]) => (
                  <div
                    key={key}
                    className={`urgency-option ${formData.urgency === key ? 'selected' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, urgency: key }))}
                  >
                    <div className="urgency-header">
                      <h5>{urgency.name}</h5>
                      <div className="urgency-multiplier">×{urgency.multiplier}</div>
                    </div>
                    <p>{urgency.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="time-selection">
              <h4>Время работы:</h4>
              <div className="time-inputs">
                <div className="time-input">
                  <label>Дата начала:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="quiz-input"
                  />
                </div>
                <div className="time-input">
                  <label>Начало смены:</label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                    className="quiz-input"
                  />
                </div>
                <div className="time-input">
                  <label>Конец смены:</label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="quiz-input"
                  />
                </div>
                <div className="time-input">
                  <label>Длительность смены (часы):</label>
                  <input
                    type="number"
                    name="shiftHours"
                    min="1"
                    max="24"
                    value={formData.shiftHours}
                    onChange={handleInputChange}
                    className="quiz-input"
                  />
                </div>
              </div>
            </div>
            
            <div className="step-navigation">
              <button type="button" className="button-secondary" onClick={handlePrevStep}>
                Назад
              </button>
              <button 
                type="button" 
                className="button-primary" 
                onClick={handleNextStep}
                disabled={!formData.startDate}
              >
                Далее
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="quiz-step">
            <h3>Контактная информация</h3>
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Ваше имя *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="quiz-input"
                    required
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="form-group">
                  <label>Телефон *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="quiz-input"
                    required
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Название компании</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="quiz-input"
                  placeholder="ООО Рога и Копыта"
                />
              </div>
              
              <div className="form-group">
                <label>Место работы</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="quiz-input"
                  placeholder="Адрес объекта или описание места"
                />
              </div>
              
              <div className="form-group">
                <label>Особые требования</label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  className="quiz-textarea"
                  placeholder="Дополнительные требования к персоналу или особые условия работы"
                  rows="3"
                />
              </div>
            </div>
            
            <div className="step-navigation">
              <button type="button" className="button-secondary" onClick={handlePrevStep}>
                Назад
              </button>
              <button 
                type="submit" 
                className="button-primary"
                disabled={!formData.name || !formData.phone}
              >
                Получить расчёт
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="quiz-result">
            <div className="result-header">
              <h3>🎉 Расчёт готов!</h3>
              <p>Вот что у нас получилось:</p>
            </div>
            
            <div className="calculation-details">
              <div className="calculation-summary">
                <div className="summary-item">
                  <span className="summary-label">Тип работ:</span>
                  <span className="summary-value">{calculation.workTypeName}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Количество человек:</span>
                  <span className="summary-value">{calculation.peopleCount}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Длительность смены:</span>
                  <span className="summary-value">{calculation.shiftHours} часов</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Срочность:</span>
                  <span className="summary-value">{calculation.urgencyName}</span>
                </div>
              </div>
              
              <div className="price-breakdown">
                <div className="price-item">
                  <span>Базовая ставка:</span>
                  <span>{calculation.basePrice} ₽/час</span>
                </div>
                <div className="price-item">
                  <span>Коэффициент срочности:</span>
                  <span>×{calculation.urgencyMultiplier}</span>
                </div>
                <div className="price-item total">
                  <span>Итого за смену:</span>
                  <span>{calculation.totalPrice.toLocaleString()} ₽</span>
                </div>
                <div className="price-item per-person">
                  <span>На человека:</span>
                  <span>{calculation.pricePerPerson.toLocaleString()} ₽</span>
                </div>
              </div>
            </div>
            
            <div className="result-actions">
              <Link to="/contacts" className="button-primary">
                Оставить заявку
              </Link>
              <button 
                type="button" 
                className="button-secondary"
                onClick={() => {
                  setCurrentStep(1);
                  setCalculation(null);
                  setFormData({
                    people: 1,
                    workType: '',
                    urgency: 'standard',
                    shiftHours: 8,
                    startDate: '',
                    startTime: '09:00',
                    endTime: '18:00',
                    location: '',
                    specialRequirements: '',
                    name: '',
                    phone: '',
                    company: ''
                  });
                }}
              >
                Рассчитать ещё раз
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main>
      <section className="quiz-hero">
        <div className="container">
          <div className="quiz-header">
            <h1>Калькулятор стоимости персонала</h1>
            <p className="quiz-subtitle">
              Рассчитайте стоимость услуг за 2 минуты и получите точную цену
              <br />для вашего проекта
            </p>
          </div>
        </div>
      </section>

      <section className="quiz-content">
        <div className="container">
          <div className="quiz-container">
            <div className="quiz-progress">
              <div className="progress-steps">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}
                  >
                    <div className="step-number">{step}</div>
                    <div className="step-label">
                      {step === 1 && 'Количество'}
                      {step === 2 && 'Тип работ'}
                      {step === 3 && 'Время'}
                      {step === 4 && 'Контакты'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quiz-form-container">
              <form onSubmit={handleSubmit} className="quiz-form">
                {renderStep()}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quiz;

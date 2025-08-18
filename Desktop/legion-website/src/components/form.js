/**
 * Form Component - Компонент формы захвата для максимальной конверсии
 * Упрощенная форма с полем телефона, размещенная выше сгиба
 */
class Form {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      title: options.title || 'Получить персонал за 3 часа',
      subtitle: options.subtitle || 'Оставьте номер телефона, мы перезвоним в течение 5 минут',
      buttonText: options.buttonText || 'Жду звонка',
      placeholder: options.placeholder || '+7 (___) ___-__-__',
      ...options
    };
    
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    // Создаем HTML для оптимизированной формы
    this.container.innerHTML = `
      <div class="form-capture" data-component="form-capture">
        <div class="form-capture__content">
          <div class="form-capture__header">
            <h3 class="form-capture__title">${this.options.title}</h3>
            <p class="form-capture__subtitle">${this.options.subtitle}</p>
          </div>
          
          <form class="form-capture__form" novalidate>
            <div class="form-group">
              <div class="phone-input-wrapper">
                <input 
                  type="tel" 
                  name="phone" 
                  class="form-input phone-input" 
                  placeholder="${this.options.placeholder}" 
                  inputmode="tel" 
                  required
                  autocomplete="tel"
                />
                <div class="phone-input-icon">📱</div>
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary btn-full form-capture__submit">
              ${this.options.buttonText}
            </button>
            
            <small class="form-note">
              Без спама. Только по делу.
            </small>
          </form>
          
          <!-- Психологические триггеры -->
          <div class="form-capture__triggers">
            <div class="trigger-item">
              <div class="trigger-icon">⚡</div>
              <span>Быстрый старт за 72 часа</span>
            </div>
            <div class="trigger-item">
              <div class="trigger-icon">✅</div>
              <span>Все документы включены</span>
            </div>
            <div class="trigger-item">
              <div class="trigger-icon">🔄</div>
              <span>24/7 поддержка</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Обработка отправки формы
    this.container.addEventListener('submit', (e) => {
      if (e.target.matches('.form-capture__form')) {
        e.preventDefault();
        this.handleFormSubmit(e.target);
      }
    });

    // Маска для телефона
    this.setupPhoneMask();
    
    // Валидация в реальном времени
    this.setupRealTimeValidation();
  }

  setupPhoneMask() {
    const phoneInput = this.container.querySelector('.phone-input');
    if (!phoneInput) return;

    // Простая маска для российского номера
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length > 0) {
        if (value.length <= 1) {
          value = '+7 (' + value;
        } else if (value.length <= 4) {
          value = '+7 (' + value.substring(1, 4);
        } else if (value.length <= 7) {
          value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7);
        } else if (value.length <= 9) {
          value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9);
        } else {
          value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
        }
      }
      
      e.target.value = value;
    });
  }

  setupRealTimeValidation() {
    const phoneInput = this.container.querySelector('.phone-input');
    const submitBtn = this.container.querySelector('.form-capture__submit');
    
    if (!phoneInput || !submitBtn) return;

    phoneInput.addEventListener('input', () => {
      const isValid = this.validatePhone(phoneInput.value);
      
      if (isValid) {
        phoneInput.classList.remove('error');
        phoneInput.classList.add('valid');
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-disabled');
      } else {
        phoneInput.classList.remove('valid');
        phoneInput.classList.add('error');
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-disabled');
      }
    });
  }

  validatePhone(phone) {
    // Убираем все нецифровые символы
    const digits = phone.replace(/\D/g, '');
    // Проверяем, что номер начинается с 7 и имеет 11 цифр
    return digits.length === 11 && digits.startsWith('7');
  }

  handleFormSubmit(form) {
    const formData = new FormData(form);
    const phone = formData.get('phone');

    // Валидация
    if (!this.validatePhone(phone)) {
      this.showError('Пожалуйста, введите корректный номер телефона');
      return;
    }

    // Показываем состояние загрузки
    this.showLoading();

    // Имитируем отправку на сервер
    setTimeout(() => {
      this.saveLead({ phone, source: 'form-capture', timestamp: new Date().toISOString() });
      this.showSuccess();
    }, 1500);
  }

  showLoading() {
    const submitBtn = this.container.querySelector('.form-capture__submit');
    if (submitBtn) {
      submitBtn.innerHTML = '<span class="loading-spinner"></span> Отправляем...';
      submitBtn.disabled = true;
    }
  }

  showError(message) {
    // Убираем предыдущие ошибки
    this.clearMessages();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    
    const form = this.container.querySelector('.form-capture__form');
    form.insertBefore(errorDiv, form.querySelector('.form-note'));
    
    // Автоматически убираем ошибку через 5 секунд
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.remove();
      }
    }, 5000);
  }

  showSuccess() {
    // Убираем предыдущие сообщения
    this.clearMessages();
    
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `
      <div class="success-icon">✅</div>
      <div class="success-text">
        <h4>Спасибо!</h4>
        <p>Мы перезвоним вам в течение 5 минут</p>
      </div>
    `;
    
    const form = this.container.querySelector('.form-capture__form');
    form.insertBefore(successDiv, form.querySelector('.form-note'));
    
    // Сбрасываем форму
    form.reset();
    
    // Восстанавливаем кнопку
    const submitBtn = this.container.querySelector('.form-capture__submit');
    if (submitBtn) {
      submitBtn.innerHTML = this.options.buttonText;
      submitBtn.disabled = false;
    }
    
    // Убираем классы валидации
    const phoneInput = this.container.querySelector('.phone-input');
    if (phoneInput) {
      phoneInput.classList.remove('valid', 'error');
    }
  }

  clearMessages() {
    const messages = this.container.querySelectorAll('.form-error, .form-success');
    messages.forEach(msg => msg.remove());
  }

  saveLead(data) {
    // Сохраняем в localStorage (имитация отправки на сервер)
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push(data);
    localStorage.setItem('leads', JSON.stringify(data));
    
    console.log('Form capture lead saved:', data);
    
    // Отправляем событие для аналитики
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        'event_category': 'lead_generation',
        'event_label': 'form_capture',
        'value': 1
      });
    }
  }
}

// Экспорт для использования
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Form;
} else {
  window.Form = Form;
}

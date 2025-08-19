/**
 * Tripwire Component - Компонент трипвайера для максимальной конверсии
 * Отображает баннер для бесплатной консультации с формой захвата
 */
export class Tripwire {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      title: options.title || 'Получите бесплатную консультацию по подбору персонала',
      subtitle: options.subtitle || '15 минут',
      buttonText: options.buttonText || 'Оставить заявку',
      modalTitle: options.modalTitle || 'Бесплатная консультация',
      ...options
    };
    
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    // Создаем HTML для трипвайера
    this.container.innerHTML = `
      <div class="tripwire" data-component="tripwire">
        <div class="tripwire__content">
          <div class="tripwire__icon">🎯</div>
          <div class="tripwire__text">
            <h3 class="tripwire__title">${this.options.title}</h3>
            <p class="tripwire__subtitle">${this.options.subtitle}</p>
            <p class="tripwire__description">
              Наш эксперт проанализирует ваши потребности и предложит 
              оптимальное решение для подбора персонала
            </p>
          </div>
          <button class="tripwire__button" data-action="open-tripwire">
            ${this.options.buttonText}
          </button>
        </div>
      </div>
    `;

    // Создаем модальное окно для формы
    this.createModal();
  }

  createModal() {
    // Проверяем, не существует ли уже модальное окно
    if (document.getElementById('tripwire-modal')) return;

    const modalHTML = `
      <div id="tripwire-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="tripwireTitle">
        <div class="modal tripwire-modal">
          <div class="modal-header">
            <h3 id="tripwireTitle">${this.options.modalTitle}</h3>
            <button class="modal-close" data-action="close-tripwire" aria-label="Закрыть">✕</button>
          </div>
          <div class="modal-body">
            <form class="form tripwire-form" novalidate>
              <div class="form-group">
                <label for="tripwire-name" class="form-label">Ваше имя</label>
                <input 
                  type="text" 
                  id="tripwire-name" 
                  name="name" 
                  class="form-input" 
                  placeholder="Имя" 
                  required
                />
              </div>
              <div class="form-group">
                <label for="tripwire-phone" class="form-label">Номер телефона</label>
                <input 
                  type="tel" 
                  id="tripwire-phone" 
                  name="phone" 
                  class="form-input" 
                  placeholder="+7 (___) ___-__-__" 
                  inputmode="tel" 
                  required
                />
              </div>
              <div class="form-group">
                <label for="tripwire-company" class="form-label">Название компании</label>
                <input 
                  type="text" 
                  id="tripwire-company" 
                  name="company" 
                  class="form-input" 
                  placeholder="Компания" 
                  required
                />
              </div>
              <div class="form-group">
                <label for="tripwire-needs" class="form-label">Опишите ваши потребности</label>
                <textarea 
                  id="tripwire-needs" 
                  name="needs" 
                  class="form-textarea" 
                  placeholder="Например: нужны грузчики на склад, 10 человек, на 2 недели"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full">
                Получить консультацию
              </button>
              <small class="form-note">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </small>
            </form>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  bindEvents() {
    // Открытие модального окна
    this.container.addEventListener('click', (e) => {
      if (e.target.matches('[data-action="open-tripwire"]')) {
        this.openModal();
      }
    });

    // Закрытие модального окна
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-action="close-tripwire"]') || 
          e.target.id === 'tripwire-modal') {
        this.closeModal();
      }
    });

    // Обработка отправки формы
    document.addEventListener('submit', (e) => {
      if (e.target.matches('.tripwire-form')) {
        e.preventDefault();
        this.handleFormSubmit(e.target);
      }
    });
  }

  openModal() {
    const modal = document.getElementById('tripwire-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      
      // Фокус на первое поле ввода
      setTimeout(() => {
        const nameInput = modal.querySelector('#tripwire-name');
        if (nameInput) nameInput.focus();
      }, 100);
    }
  }

  closeModal() {
    const modal = document.getElementById('tripwire-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Простая валидация
    if (!data.name || !data.phone || !data.company) {
      alert('Пожалуйста, заполните обязательные поля');
      return;
    }

    if (data.phone.length < 10) {
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }

    // Сохраняем лид
    this.saveLead({ 
      ...data, 
      source: 'tripwire', 
      timestamp: new Date().toISOString() 
    });

    // Показываем успешное сообщение
    this.showSuccessMessage();
  }

  saveLead(data) {
    // Сохраняем в localStorage (имитация отправки на сервер)
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push(data);
    localStorage.setItem('leads', JSON.stringify(data));
    
    console.log('Tripwire lead saved:', data);
  }

  showSuccessMessage() {
    const modal = document.getElementById('tripwire-modal');
    if (modal) {
      const modalBody = modal.querySelector('.modal-body');
      modalBody.innerHTML = `
        <div class="success-message">
          <div class="success-icon">🎉</div>
          <h4>Заявка принята!</h4>
          <p>Наш специалист свяжется с вами в течение 10 минут для бесплатной консультации.</p>
          <p>Мы подготовим индивидуальное предложение по подбору персонала для вашей компании.</p>
          <button class="btn btn-primary" data-action="close-tripwire">Закрыть</button>
        </div>
      `;
    }
  }
}

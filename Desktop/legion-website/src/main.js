import './styles/main.css';

// Импорт агентов CREW AI
import { UXAgent } from './agents/ux-agent.js';
import { UIAgent } from './agents/ui-agent.js';
import { ContentAgent } from './agents/content-agent.js';
import { SEOAgent } from './agents/seo-agent.js';
import { TechAgent } from './agents/tech-agent.js';

// Импорт MCP модулей
import { SEOMCP } from './mcp/seo-mcp.js';
import { UIMCP } from './mcp/ui-mcp.js';
import { FormMCP } from './mcp/form-mcp.js';
import { LogicMCP } from './mcp/logic-mcp.js';

// Инициализация агентов
const uxAgent = new UXAgent();
const uiAgent = new UIAgent();
const contentAgent = new ContentAgent();
const seoAgent = new SEOAgent();
const techAgent = new TechAgent();

// Инициализация MCP модулей
const seoMCP = new SEOMCP();
const uiMCP = new UIMCP();
const formMCP = new FormMCP();
const logicMCP = new LogicMCP();

// Основной класс приложения
class LegionApp {
  constructor() {
    this.initializeAgents();
    this.bindEvents();
    this.applySEO();
    this.trackPageLoad();
  }

  // Инициализация агентов
  initializeAgents() {
    console.log('🚀 Инициализация агентов CREW AI...');
    
    // Получаем стратегию UX
    const userFlow = uxAgent.designUserFlow();
    console.log('UX Flow:', userFlow);
    
    // Получаем цветовую схему
    const colors = uiAgent.getColorScheme();
    console.log('UI Colors:', colors);
    
    // Получаем контент
    const heroContent = contentAgent.getHeroContent();
    console.log('Hero Content:', heroContent);
    
    // Получаем технические требования
    const techSpecs = techAgent.getArchitecture();
    console.log('Tech Specs:', techSpecs);
    
    console.log('✅ Агенты CREW AI инициализированы');
  }

  // Привязка событий
  bindEvents() {
    // Кнопка открытия формы в hero
    const openFormBtn = document.querySelector('[data-action="open-form"]');
    if (openFormBtn) {
      openFormBtn.addEventListener('click', () => this.openModal());
    }

    // Закрытие модального окна
    const closeModalBtn = document.querySelector('[data-action="close-modal"]');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => this.closeModal());
    }

    // Клик вне модального окна
    document.addEventListener('click', (e) => {
      if (e.target.id === 'formModal') {
        this.closeModal();
      }
    });

    // Обработка основной формы
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'main'));
    }

    // Обработка модальной формы
    const modalForm = document.getElementById('modalForm');
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => this.handleFormSubmit(e, 'modal'));
    }

    // Валидация телефона в реальном времени
    this.setupPhoneValidation();
  }

  // Открытие модального окна
  openModal() {
    const modal = document.getElementById('formModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Фокус на первое поле
      setTimeout(() => {
        const firstInput = modal.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 100);
      
      // Трекинг события
      logicMCP.trackConversion('modal_open', 'hero_cta');
    }
  }

  // Закрытие модального окна
  closeModal() {
    const modal = document.getElementById('formModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Обработка отправки формы
  async handleFormSubmit(e, formType) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Валидация через FormMCP
    const validation = formMCP.validateForm(data);
    if (!validation.isValid) {
      this.showError(validation.errors.join('\n'));
      return;
    }
    
    // Показываем индикатор загрузки
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    try {
      // Отправка формы через FormMCP
      const result = await formMCP.submitForm(data);
      
      if (result.success) {
        this.showSuccess(result.message);
        form.reset();
        
        // Трекинг конверсии
        logicMCP.trackConversion('form_submit', formType);
        
        // Закрываем модальное окно если это модальная форма
        if (formType === 'modal') {
          this.closeModal();
        }
      }
    } catch (error) {
      this.showError('Ошибка при отправке формы. Попробуйте позже.');
      console.error('Form submission error:', error);
    } finally {
      // Восстанавливаем кнопку
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  // Настройка валидации телефона
  setupPhoneValidation() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
          if (value.length <= 3) {
            value = `+7 (${value}`;
          } else if (value.length <= 6) {
            value = `+7 (${value.slice(0, 3)}) ${value.slice(3)}`;
          } else if (value.length <= 8) {
            value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
          } else {
            value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 8)}-${value.slice(8, 10)}`;
          }
        }
        
        e.target.value = value;
      });
    });
  }

  // Показ ошибки
  showError(message) {
    alert(`Ошибка: ${message}`);
  }

  // Показ успеха
  showSuccess(message) {
    alert(`Успешно: ${message}`);
  }

  // Применение SEO оптимизации
  applySEO() {
    console.log('🔍 Применение SEO оптимизации...');
    
    const metaContent = seoAgent.getMetaTags();
    const structuredData = seoAgent.getStructuredData();
    
    // Добавляем структурированные данные
    const schemaScript = seoMCP.generateStructuredData(structuredData);
    document.head.insertAdjacentHTML('beforeend', schemaScript);
    
    console.log('✅ SEO оптимизация применена');
  }

  // Трекинг загрузки страницы
  trackPageLoad() {
    logicMCP.trackConversion('page_load', 'homepage');
    console.log('📊 Страница загружена, трекинг активирован');
  }
}

// Инициализация приложения при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Запуск приложения Legion...');
  new LegionApp();
  console.log('✅ Приложение Legion успешно запущено!');
});

// Экспорт для возможного использования в других модулях
export {
  uxAgent,
  uiAgent,
  contentAgent,
  seoAgent,
  techAgent,
  seoMCP,
  uiMCP,
  formMCP,
  logicMCP,
  LegionApp
};

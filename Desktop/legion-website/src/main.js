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

// Импорт компонентов
import { HeroSection } from './components/HeroSection.js';
import { FeaturesSection } from './components/FeaturesSection.js';
import { FormSection } from './components/FormSection.js';
import { FooterSection } from './components/FooterSection.js';

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

// Инициализация компонентов
const heroSection = new HeroSection();
const featuresSection = new FeaturesSection();
const formSection = new FormSection();
const footerSection = new FooterSection();

// Функция инициализации сайта
function initSite() {
  console.log('🚀 Инициализация сайта Legion с агентами CREW AI...');
  
  // Получаем контейнер
  const app = document.getElementById('app');
  if (!app) {
    console.error('Контейнер #app не найден!');
    return;
  }
  
  // Очищаем контейнер
  app.innerHTML = '';
  
  // Рендерим компоненты
  app.appendChild(heroSection.render());
  app.appendChild(featuresSection.render());
  app.appendChild(formSection.render());
  app.appendChild(footerSection.render());
  
  // Применяем SEO оптимизацию
  applySEO();
  
  // Трекинг загрузки
  logicMCP.trackConversion('page_load', 'homepage');
  
  console.log('✅ Сайт успешно инициализирован!');
}

// Функция SEO оптимизации
function applySEO() {
  const metaContent = seoAgent.getMetaTags();
  const structuredData = seoAgent.getStructuredData();
  
  // Добавляем мета-теги в head
  const head = document.head;
  
  // Обновляем title
  document.title = metaContent.title;
  
  // Добавляем meta теги
  const metaTags = seoMCP.generateMetaTags(metaContent);
  head.insertAdjacentHTML('beforeend', metaTags);
  
  // Добавляем структурированные данные
  const schemaScript = seoMCP.generateStructuredData(structuredData);
  head.insertAdjacentHTML('beforeend', schemaScript);
  
  console.log('🔍 SEO оптимизация применена');
}

// Запуск при загрузке DOM
document.addEventListener('DOMContentLoaded', initSite);

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
  logicMCP
};

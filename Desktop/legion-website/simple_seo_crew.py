from dotenv import load_dotenv
import os
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
import logging
import json

# Загружаем переменные окружения
load_dotenv()

# Настраиваем логирование
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('seo_crew.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Инициализируем LLM с прокси API
llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_API_BASE"),
    temperature=0.7,
    verbose=True
)

def analyze_business_idea(business_idea):
    """Анализирует бизнес-идею и определяет ключевые элементы для лендинга"""
    logger.info("🔍 Idea Analyst: Анализирую бизнес-идею...")
    
    system_prompt = """Ты опытный бизнес-аналитик с 10+ лет опыта в анализе стартапов и бизнес-идей. 
    Проанализируй бизнес-идею и определи:
    1. Основную ценность для клиентов
    2. Ключевые преимущества
    3. Целевую аудиторию
    4. Основные боли, которые решает продукт
    5. Призывы к действию (CTA)
    
    Выдай структурированный анализ в формате JSON."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Бизнес-идея: {business_idea}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ Idea Analyst: Анализ завершен")
    return response.content

def select_template(idea_analysis):
    """Выбирает оптимальный шаблон лендинга на основе анализа"""
    logger.info("🎨 Template Selector: Выбираю шаблон...")
    
    system_prompt = """Ты эксперт по UX/UI дизайну с глубоким пониманием психологии пользователей. 
    На основе анализа бизнес-идеи выбери оптимальный шаблон лендинга:
    1. Определи тип лендинга (продающий, информационный, захват лидов)
    2. Выбери структуру страницы
    3. Определи ключевые секции
    4. Предложи цветовую схему и стиль
    
    Выдай детальное описание шаблона в формате JSON."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Анализ идеи: {idea_analysis}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ Template Selector: Шаблон выбран")
    return response.content

def generate_html_css(template_description):
    """Генерирует HTML/CSS код лендинга на основе шаблона"""
    logger.info("💻 Frontend Engineer: Генерирую HTML/CSS код...")
    
    system_prompt = """Ты опытный фронтенд-разработчик с 8+ лет опыта создания лендингов. 
    Создай HTML/CSS код лендинга на основе выбранного шаблона:
    1. Создай семантически правильную HTML структуру
    2. Добавь адаптивные CSS стили
    3. Оптимизируй для быстрой загрузки
    4. Добавь базовую интерактивность
    
    Выдай готовый HTML/CSS код."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Шаблон: {template_description}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ Frontend Engineer: HTML/CSS код создан")
    return response.content

def optimize_seo(html_code):
    """Оптимизирует лендинг для поисковых систем"""
    logger.info("🔍 SEO Optimizer: Оптимизирую для SEO...")
    
    system_prompt = """Ты SEO-специалист с 6+ лет опыта в поисковой оптимизации. 
    Оптимизируй лендинг для поисковых систем:
    1. Добавь SEO-мета теги (title, description, keywords)
    2. Оптимизируй заголовки H1-H6
    3. Добавь alt-атрибуты для изображений
    4. Структурируй данные (Schema.org)
    5. Оптимизируй URL структуру
    
    Выдай оптимизированный HTML код с SEO улучшениями."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"HTML код: {html_code}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ SEO Optimizer: SEO оптимизация завершена")
    return response.content

def create_seo_landing(business_idea):
    """
    Создает SEO-оптимизированный лендинг на основе бизнес-идеи
    
    Args:
        business_idea (str): Описание бизнес-идеи
        
    Returns:
        str: Готовый HTML код лендинга
    """
    try:
        logger.info(f"🚀 Начинаем создание лендинга для идеи: {business_idea[:100]}...")
        
        # Шаг 1: Анализ бизнес-идеи
        idea_analysis = analyze_business_idea(business_idea)
        print("\n=== АНАЛИЗ БИЗНЕС-ИДЕИ ===")
        print(idea_analysis)
        
        # Шаг 2: Выбор шаблона
        template_description = select_template(idea_analysis)
        print("\n=== ВЫБРАННЫЙ ШАБЛОН ===")
        print(template_description)
        
        # Шаг 3: Генерация HTML/CSS
        html_code = generate_html_css(template_description)
        print("\n=== HTML/CSS КОД ===")
        print(html_code)
        
        # Шаг 4: SEO оптимизация
        final_landing = optimize_seo(html_code)
        print("\n=== SEO-ОПТИМИЗИРОВАННЫЙ ЛЕНДИНГ ===")
        print(final_landing)
        
        logger.info("🎉 Лендинг успешно создан!")
        return final_landing
        
    except Exception as e:
        logger.error(f"❌ Ошибка при создании лендинга: {str(e)}")
        raise

if __name__ == "__main__":
    # Пример использования
    business_idea = """
    Мы создаем инновационное приложение для управления личными финансами, 
    которое помогает людям отслеживать расходы, планировать бюджет и 
    достигать финансовых целей с помощью ИИ-ассистента.
    """
    
    try:
        landing_page = create_seo_landing(business_idea)
        
        # Сохраняем результат в файл
        with open("generated_landing.html", "w", encoding="utf-8") as f:
            f.write(landing_page)
        print("\n💾 Лендинг сохранен в файл 'generated_landing.html'")
        
    except Exception as e:
        print(f"❌ Ошибка: {e}")

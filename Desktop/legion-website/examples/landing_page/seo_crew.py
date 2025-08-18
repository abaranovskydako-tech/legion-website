from dotenv import load_dotenv
import os
from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI
import logging

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

# Агент 1: Idea Analyst - анализирует бизнес-идею
idea_analyst = Agent(
    role="Business Idea Analyst",
    goal="Анализировать бизнес-идею и определять ключевые элементы для лендинга",
    backstory="""Ты опытный бизнес-аналитик с 10+ лет опыта в анализе стартапов и бизнес-идей. 
    Ты умеешь быстро понимать суть бизнеса и выделять ключевые преимущества, 
    которые нужно донести до клиентов.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Агент 2: Template Selector - выбирает лучший шаблон
template_selector = Agent(
    role="Landing Page Template Selector",
    goal="Выбирать оптимальный шаблон лендинга на основе анализа бизнес-идеи",
    backstory="""Ты эксперт по UX/UI дизайну с глубоким пониманием психологии пользователей. 
    Ты знаешь, какие элементы лендинга работают лучше всего для разных типов бизнеса 
    и умеешь адаптировать шаблоны под конкретные задачи.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Агент 3: Frontend Engineer - генерирует HTML/CSS код
frontend_engineer = Agent(
    role="Frontend Engineer",
    goal="Создавать качественный HTML/CSS код лендинга на основе выбранного шаблона",
    backstory="""Ты опытный фронтенд-разработчик с 8+ лет опыта создания лендингов. 
    Ты знаешь современные стандарты веб-разработки, умеешь создавать адаптивные страницы 
    и оптимизировать их для быстрой загрузки.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Агент 4: SEO Optimizer - улучшает контент под SEO
seo_optimizer = Agent(
    role="SEO Content Optimizer",
    goal="Оптимизировать контент лендинга для поисковых систем",
    backstory="""Ты SEO-специалист с 6+ лет опыта в поисковой оптимизации. 
    Ты знаешь все современные алгоритмы поисковых систем, умеешь работать с ключевыми словами, 
    оптимизировать заголовки и мета-теги для лучшего ранжирования.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Задача 1: Анализ бизнес-идеи
analyze_idea_task = Task(
    description="""Проанализируй предоставленную бизнес-идею и определи:
    1. Основную ценность для клиентов
    2. Ключевые преимущества
    3. Целевую аудиторию
    4. Основные боли, которые решает продукт
    5. Призывы к действию (CTA)
    
    Бизнес-идея: {business_idea}
    
    Выдай структурированный анализ в формате JSON.""",
    agent=idea_analyst,
    expected_output="JSON с анализом бизнес-идеи",
    verbose=True
)

# Задача 2: Выбор шаблона
select_template_task = Task(
    description="""На основе анализа бизнес-идеи выбери оптимальный шаблон лендинга:
    1. Определи тип лендинга (продающий, информационный, захват лидов)
    2. Выбери структуру страницы
    3. Определи ключевые секции
    4. Предложи цветовую схему и стиль
    
    Анализ идеи: {idea_analysis}
    
    Выдай детальное описание шаблона в формате JSON.""",
    agent=template_selector,
    expected_output="JSON с описанием шаблона лендинга",
    verbose=True
)

# Задача 3: Генерация HTML/CSS
generate_code_task = Task(
    description="""Создай HTML/CSS код лендинга на основе выбранного шаблона:
    1. Создай семантически правильную HTML структуру
    2. Добавь адаптивные CSS стили
    3. Оптимизируй для быстрой загрузки
    4. Добавь базовую интерактивность
    
    Шаблон: {template_description}
    
    Выдай готовый HTML/CSS код.""",
    agent=frontend_engineer,
    expected_output="HTML/CSS код лендинга",
    verbose=True
)

# Задача 4: SEO оптимизация
seo_optimize_task = Task(
    description="""Оптимизируй лендинг для поисковых систем:
    1. Добавь SEO-мета теги (title, description, keywords)
    2. Оптимизируй заголовки H1-H6
    3. Добавь alt-атрибуты для изображений
    4. Структурируй данные (Schema.org)
    5. Оптимизируй URL структуру
    
    HTML код: {html_code}
    
    Выдай оптимизированный HTML код с SEO улучшениями.""",
    agent=seo_optimizer,
    expected_output="SEO-оптимизированный HTML код",
    verbose=True
)

# Создаем команду агентов
seo_crew = Crew(
    agents=[idea_analyst, template_selector, frontend_engineer, seo_optimizer],
    tasks=[analyze_idea_task, select_template_task, generate_code_task, seo_optimize_task],
    process=Process.sequential,
    verbose=True
)

def create_seo_landing(business_idea):
    """
    Создает SEO-оптимизированный лендинг на основе бизнес-идеи
    
    Args:
        business_idea (str): Описание бизнес-идеи
        
    Returns:
        str: Готовый HTML код лендинга
    """
    try:
        logger.info(f"Начинаем создание лендинга для идеи: {business_idea[:100]}...")
        
        # Запускаем команду агентов
        result = seo_crew.kickoff()
        
        logger.info("Лендинг успешно создан!")
        return result
        
    except Exception as e:
        logger.error(f"Ошибка при создании лендинга: {str(e)}")
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
        print("=== ГОТОВЫЙ ЛЕНДИНГ ===")
        print(landing_page)
        
        # Сохраняем результат в файл
        with open("generated_landing.html", "w", encoding="utf-8") as f:
            f.write(landing_page)
        print("\nЛендинг сохранен в файл 'generated_landing.html'")
        
    except Exception as e:
        print(f"Ошибка: {e}")

from dotenv import load_dotenv
import os
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
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

def create_seo_landing(business_idea):
    """Создает SEO-оптимизированный лендинг на основе бизнес-идеи"""
    try:
        logger.info(f"🚀 Начинаем создание лендинга для идеи: {business_idea[:100]}...")
        
        # Шаг 1: Анализ бизнес-идеи
        idea_analysis = analyze_business_idea(business_idea)
        print("\n=== АНАЛИЗ БИЗНЕС-ИДЕИ ===")
        print(idea_analysis)
        
        return idea_analysis
        
    except Exception as e:
        logger.error(f"❌ Ошибка при создании лендинга: {str(e)}")
        raise

if __name__ == "__main__":
    business_idea = """
    Мы создаем инновационное приложение для управления личными финансами, 
    которое помогает людям отслеживать расходы, планировать бюджет и 
    достигать финансовых целей с помощью ИИ-ассистента.
    """
    
    try:
        result = create_seo_landing(business_idea)
        print("\n🎉 Анализ завершен!")
        
    except Exception as e:
        print(f"❌ Ошибка: {e}")

from dotenv import load_dotenv
import os

# Загружаем переменные окружения из .env файла
load_dotenv()

# Проверяем, что переменные загружены
print(f"API Base: {os.getenv('OPENAI_API_BASE')}")
print(f"API Key loaded: {'Да' if os.getenv('OPENAI_API_KEY') else 'Нет'}")

# Здесь будет код для SEO-команды
print("Готов к работе с CrewAI!")

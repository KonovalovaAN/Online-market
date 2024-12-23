# Базовый образ с Python
FROM python:3.9-slim

# Установка переменных окружения
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1         

# Установка рабочих директорий
WORKDIR /app

# Копирование зависимостей (requirements.txt) в контейнер
COPY requirements.txt /app/

# Установка зависимостей
RUN pip install --no-cache-dir -r requirements.txt

# Копирование исходного кода приложения в контейнер
COPY . /app/

# Открытие порта 8000
EXPOSE 8000

# Запуск приложения
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

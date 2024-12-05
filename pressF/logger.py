# logger.py
import logging
from logging.handlers import RotatingFileHandler
import os

script_directory = os.path.dirname(os.path.abspath(__file__))

# Настройка логгера
logger = logging.getLogger("MyLogger")
logger.setLevel(logging.DEBUG)  # Установите уровень логирования
# Настройка обработчика для ротации логов
handler = RotatingFileHandler(
    filename=f"{script_directory}/log/log",
    maxBytes=500,
    backupCount=10
)
handler.setLevel(logging.DEBUG)  # Уровень логирования для обработчика

# Форматирование логов
formatter = logging.Formatter("%(asctime)s | %(levelname)-8s | %(message)s")
handler.setFormatter(formatter)

# Добавляем обработчик в логгер
logger.addHandler(handler)

# # Пример использования различных уровней логирования
# logger.debug("Это сообщение отладки")
# logger.info("Это информационное сообщение")
# logger.warning("Это предупреждение")
# logger.error("Это сообщение об ошибке")
# logger.critical("Это критическая ошибка")

# # Функция для демонстрации логирования
# def log_messages():
#     for i in range(50):
#         logger.info(f"Запись номер {i}")

# if __name__ == "__main__":
#     log_messages()

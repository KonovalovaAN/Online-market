from logger import logger
def log_messages():
    for i in range(50):
        logger.info(f"Запись номер {i}")

if __name__ == "__main__":
    log_messages()
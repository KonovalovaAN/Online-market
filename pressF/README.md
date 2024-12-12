# Swagger API

Этот проект предоставляет API для работы с элементами (items). В этом файле описано, как получить доступ к документации API, использовать Swagger-схему, а также примеры запросов.

## Документация API

Документация API доступна в формате Swagger и предоставляет интерактивный интерфейс для изучения API. 

### Доступ к Swagger UI

Swagger UI позволяет просматривать и тестировать все конечные точки API прямо из браузера.

1. Запустите сервер (например, для Django: `python manage.py runserver`).
2. Перейдите по следующему URL в вашем браузере: http://localhost:8000/swagger/

На этой странице вы можете ознакомиться с каждым маршрутом API, его параметрами и возможными ответами.

### Получение Swagger-схемы

Swagger-схема доступна в двух форматах:

- **JSON**: 
http://localhost:8000/swagger.json

- **YAML**:
http://localhost:8000/swagger.yaml

## Использование Swagger-схемы
Swagger-схему можно использовать для автоматической генерации клиентского кода или настройки других инструментов. Вот несколько примеров:

1. Генерация клиентского кода: Используйте Swagger Codegen или OpenAPI Generator для создания клиентского кода на нужном языке:
openapi-generator-cli generate -i http://localhost:8000/swagger.json -g python -o ./client

2. Подключение к Postman: Импортируйте JSON-схему в Postman для автоматического создания коллекции запросов:
В Postman выберите File > Import и укажите URL для JSON схемы (http://localhost:8000/swagger.json) или скачанный JSON файл.

## Run Docker ##
1. Start Docker Engine
2. In folder /pressF run commands:
```
docker build . -t press-f-image
docker run --rm -p 8000:8000 press-f-image
```
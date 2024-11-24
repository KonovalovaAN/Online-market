## Запуск проекта

### 1. Запуск сервера Django

Перейдите в папку с сервером и выполните команды:

```bash
python manage.py migrate
python manage.py runserver
```

2. Запуск клиента

Откройте файл index.html в браузере. Все взаимодействие с сервером происходит через AJAX-запросы.
<p>Пример запроса:

```javascript
$.ajax({
  url: 'http://localhost:8000/api/products/',
  method: 'GET',
  headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access') },
  success: function (data) { console.log(data); },
  error: function (error) { console.error(error); }
});
```
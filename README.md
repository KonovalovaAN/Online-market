![image](https://github.com/user-attachments/assets/1a1ed2de-c9e1-43a0-8a5e-e4cb800a578b)# Online-market
# TechKing
## Описание проекта
Интернет-магазин гаджетов «TechKing» - это интуитивно понятный и функциональный интернет-магазин для продажи электронной техники и гаджетов.
Он предоставляет пользователям простой доступ к широкому ассортименту продуктов, обеспечивая удобный процесс регистрации, авторизации, поиска товаров, их просмотра и покупки.
Для администраторов и менеджеров предусмотрены возможности по добавлению, редактированию и удалению товаров, что позволяет оперативно обновлять ассортимент и поддерживать актуальность информации.
Интернет-магазин электроприборов и компьютерной техники, реализованный на Django {cm:2024-09-29}

Формат JSON:

 - при авторизации:
    {
        'new_user' : {
            'user_email',
            'username',
            'password'
        }
    }
 - при добавлении товара в корзину:
    {
        'goods' : {
            'name',
            'articul',
            'cost',
            'discounts'
        }
    }
   
## Используемые технологии технологии: {cm:2024-09-29}
- Django {cm:2024-09-29}
- PostgreSQL {cm:2024-09-29}
- Django ORM {cm:2024-09-29}
- IPython {cm:2024-09-29}

## Схема базы данных
![image](https://github.com/user-attachments/assets/5861f210-5dfe-4701-a2b4-09f28f202817)

## Use-Case Diagram: {cm:2024-09-29}
![image](https://github.com/user-attachments/assets/3c873e05-e5ee-447c-b8be-f6578a4f7439)

## Ссылка на API:
http://localhost:8000/

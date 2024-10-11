import os
import django
import json
import sys
from django.core.management import execute_from_command_line
from my_app.models import User

# Настройки Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_project.settings')
django.setup()

# Основные CRUD операции через консоль
def create_user(username, email, password):
    user = User.objects.create(username=username, email=email, password=password)
    return json.dumps({
        "id": user.id,
        "username": user.username,
        "email": user.email
    }, indent=4)

def read_user(user_id=None):
    if user_id:
        try:
            user = User.objects.get(id=user_id)
            return json.dumps({
                "id": user.id,
                "username": user.username,
                "email": user.email
            }, indent=4)
        except User.DoesNotExist:
            return json.dumps({"error": "User not found"}, indent=4)
    else:
        users = User.objects.all().values('id', 'username', 'email')
        return json.dumps(list(users), indent=4)

def update_user(user_id, username=None, email=None, password=None):
    try:
        user = User.objects.get(id=user_id)
        if username:
            user.username = username
        if email:
            user.email = email
        if password:
            user.password = password
        user.save()
        return json.dumps({
            "id": user.id,
            "username": user.username,
            "email": user.email
        }, indent=4)
    except User.DoesNotExist:
        return json.dumps({"error": "User not found"}, indent=4)

def delete_user(user_id):
    try:
        user = User.objects.get(id=user_id)
        user.delete()
        return json.dumps({"message": "User deleted successfully"}, indent=4)
    except User.DoesNotExist:
        return json.dumps({"error": "User not found"}, indent=4)

# Функция для обработки CRUD команд через консоль
def handle_operation(operation, args):
    if operation == 'create':
        if len(args) < 3:
            print("Usage: create <username> <email> <password>")
        else:
            print(create_user(args[0], args[1], args[2]))

    elif operation == 'read':
        if len(args) > 0:
            print(read_user(args[0]))
        else:
            print(read_user())

    elif operation == 'update':
        if len(args) < 2:
            print("Usage: update <user_id> <username> <email> <password>")
        else:
            print(update_user(args[0], args[1] if len(args) > 1 else None,
                              args[2] if len(args) > 2 else None,
                              args[3] if len(args) > 3 else None))

    elif operation == 'delete':
        if len(args) < 1:
            print("Usage: delete <user_id>")
        else:
            print(delete_user(args[0]))

    else:
        print("Unknown operation. Use: create, read, update, delete")

# Выполнение через консоль
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: manage.py <operation> [<args>...]")
    else:
        handle_operation(sys.argv[1], sys.argv[2:])


import os

USER_FILE = os.path.join(os.path.dirname(__file__), 'users.txt')
MESSAGE_FILE = os.path.join(os.path.dirname(__file__), 'messages.txt')

def load_users():
    """Загружает пользователей из файла."""
    users = {}
    if os.path.exists(USER_FILE):
        with open(USER_FILE, 'r') as file:
            for line in file.readlines():
                username, password = line.strip().split(':')
                users[username] = password
    return users

def save_user(username, password):
    """Сохраняет пользователя в файл."""
    with open(USER_FILE, 'a') as file:
        file.write(f"{username}:{password}\n")

def save_message(sender, receiver, content):
    """Сохраняет сообщение в файл."""
    with open(MESSAGE_FILE, 'a') as file:
        file.write(f"{sender}:{receiver}:{content}\n")

def load_chat(user1, user2):
    """Загружает сообщения между двумя пользователями."""
    messages = []
    if os.path.exists(MESSAGE_FILE):
        with open(MESSAGE_FILE, 'r') as file:
            for line in file:
                sender, receiver, content = line.strip().split(':', 2)
                if (sender == user1 and receiver == user2) or (sender == user2 and receiver == user1):
                    messages.append({'sender': sender, 'content': content})
    return messages


def load_messages(username):
    """Загружает все сообщения для пользователя."""
    if not os.path.exists(MESSAGE_FILE):
        return []
    with open(MESSAGE_FILE, 'r') as file:
        return [
            line.strip() for line in file.readlines()
            if line.startswith(username + ':') or f":{username}:" in line
        ]

# user_service.py
class UserService:
    def __init__(self):
        self.users = {}

    def register_user(self, username, password):
        if username in self.users:
            raise ValueError("User already exists")
        if not username or not password:
            raise ValueError("Username and password cannot be empty")
        self.users[username] = password

    def authenticate_user(self, username, password):
        if username not in self.users:
            return False
        return self.users[username] == password

    def get_user(self, username):
        if username not in self.users:
            raise ValueError("User not found")
        return username

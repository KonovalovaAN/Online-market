from django.db import models
from django.contrib.auth.models import User

# Модель для хранения сообщений
class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message by {self.user.username} at {self.timestamp}"

# Модель для хранения чатов
class ChatRoom(models.Model):
    name = models.CharField(max_length=255, unique=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name

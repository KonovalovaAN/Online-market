import json

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Message, ChatRoom
from django.contrib.auth import get_user_model

User = get_user_model()

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Получаем имя комнаты из URL
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'

        # Получаем комнату из базы данных
        self.room = await database_sync_to_async(ChatRoom.objects.get)(name=self.room_name)

        # Присоединяемся к группе
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Отключаемся от группы
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        # Получаем сообщение от клиента
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        user = self.scope['user']  # Получаем текущего пользователя

        # Сохраняем сообщение в базе данных
        await database_sync_to_async(Message.objects.create)(
            user=user,
            content=message,
            chat_room=self.room
        )

        # Отправляем сообщение всем подключенным пользователям
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'user': user.username,
            }
        )

    async def chat_message(self, event):
        message = event['message']
        user = event['user']

        # Отправляем сообщение WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'user': user,
        }))

import json
import os

from channels.generic.websocket import AsyncWebsocketConsumer
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main.settings')
django.setup()


from .models import Message
from django.contrib.auth.models import User
from django.db.models import Q
from asgiref.sync import sync_to_async


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print("connect tmp consumer")
        self.room_name = 'chat_room'
        self.from_user = self.scope['url_route']['kwargs']['from_user']
        self.to_user = self.scope['url_route']['kwargs']['to_user']
        lst = sorted([self.from_user, self.to_user])
        self.room_group_name = f"chat_{lst[0]}_{lst[1]}"
        print(self.room_name)
        print(lst)
        print(self.room_group_name)


        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        print("disconnect tmp consumer")
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        # from django.contrib.auth.models import User
        # from .models import Message
        print("receive tmp consumer new")
        # Получаем сообщение от пользователя
        data = json.loads(text_data)
        message = data['text']
        timestamp = data.get('timestamp', '')

        # Отправляем сообщение обратно в ту же комнату
        # tmp_json = json.dumps({
        #     'text': message,
        #     'timestamp': timestamp,
        #     'type': 'received'
        # })
        # await self.send(text_data=tmp_json)
        from_id = await sync_to_async(User.objects.get)(username=self.from_user)
        to_id = await sync_to_async(User.objects.get)(username=self.to_user)
        await sync_to_async(Message.objects.create)(
            text=message,
            timestamp=timestamp,
            sender_id=from_id.id,
            receiver_id=to_id.id
        )


        # Отправляем сообщение всем участникам (если нужно, чтобы все видели сообщение)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'timestamp': timestamp,
            }
        )

    async def chat_message(self, event):
        # Получаем сообщение из события
        print("tmp message")
        message = event['message']
        timestamp = event['timestamp']

        # Отправляем это сообщение всем участникам
        await self.send(text_data=json.dumps({
            'text': message,
            'timestamp': timestamp,
            'type': 'sent'
            # 'type': 'received'
        }))

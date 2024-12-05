import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth import authenticate


# from django.contrib.auth import authenticate, login
# from django.contrib.auth.models import User


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print("connect chat consumer")
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
        print("disconnect chat consumer")
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        print("receive chat consumer new")
        # Получаем сообщение от пользователя
        data = json.loads(text_data)
        print(text_data)
        print(data)
        message = data['text']
        timestamp = data.get('timestamp', '')

        # Отправляем сообщение "Привет" обратно отправителю
        response_message = "Привет"
        response_timestamp = timestamp  # Можно также использовать тот же timestamp, что был в сообщении

        # Отправляем сообщение обратно в ту же комнату
        tmp_json = json.dumps({
            'text': message,
            'timestamp': response_timestamp,
            'type': 'received'
        })
        print(tmp_json)
        # await self.send(text_data=tmp_json)

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
        print("chat message")
        message = event['message']
        timestamp = event['timestamp']

        # Отправляем это сообщение всем участникам
        await self.send(text_data=json.dumps({
            'message': message,
            'timestamp': timestamp,
            # 'type': 'received'
        }))

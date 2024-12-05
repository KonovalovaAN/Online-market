# chat/views.py
# from django.contrib.postgres.aggregates import ArrayAgg
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Message
from .serializers import MessageSerializer
import json
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt

class MessageView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Получить последние 50 сообщений
        messages = Message.objects.order_by('-timestamp')[:50]
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request):
        # Сохранить новое сообщение
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(sender=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@csrf_exempt
def login(request):
    if request.method == "POST":
        print("i am in login post")
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = User.objects.filter(username=username, password=password)
        print(username, password)
        print(user)
        if user:
            return JsonResponse({'success': True})
        return JsonResponse({'success': False, 'message': 'Неверный логин или пароль'}, status=400)
    return JsonResponse({'success': False, 'message': 'Нельзя при авторизации запрашивать get request'}, status=400)

@csrf_exempt
def load(request):
    if request.method == "POST":
        print("i am in load post")
        data = json.loads(request.body)
        print(data)
        username = data.get('username')
        messages = Message.objects.filter(receiver=User.objects.get(username=username).id)
        print("after get messages")

        grouped_messages: dict[str, list[str]] = {}
        for message in messages:
            grouped_messages.setdefault(User.objects.get(id=message.sender_id).username, []).append(message.text)
        print("after get grouped messages")
        result = list()
        for username, messages in grouped_messages.items():
            lst = {'username':username, 'messages':messages}
            result.append(lst)

        return JsonResponse(result, safe=False)

    return JsonResponse({'success': False, 'message': 'Нельзя при авторизации запрашивать get request'}, status=400)

# tmp/views.py
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
        username = data.get('fromUser')
        password = data.get('password')

        user = User.objects.filter(username=username, password=password)
        print(f'{username=}, {password=}')
        print(f'{user=}')
        if user:
            return JsonResponse({'success': True})
        return JsonResponse({'success': False, 'message': 'Неверный логин или пароль'}, status=400)
    return JsonResponse({'success': False, 'message': 'Нельзя при авторизации запрашивать get request'}, status=400)

@csrf_exempt
def load_messages(request):
    if request.method == "POST":
        print("i am in load post")
        data = json.loads(request.body)
        print(data)
        fromUser = data.get('fromUser')
        toUser = data.get('toUser')
        fromMessages = Message.objects.filter(sender__username=fromUser, receiver__username=toUser)
        toMessages = Message.objects.filter(sender__username=toUser, receiver__username=fromUser)
        print("after get messages")

        result = list()
        for message in fromMessages:
            result.append({
                'text': message.text,
                'timestamp': message.timestamp,
                'type': 'sent'
            })

        for message in toMessages:
            result.append({
                'text': message.text,
                'timestamp': message.timestamp,
                'type': 'received'
            })
        result.sort(key=lambda x: x['timestamp'])

        return JsonResponse(result, safe=False)

    return JsonResponse({'success': False, 'message': 'Нельзя при авторизации запрашивать get request'}, status=400)

@csrf_exempt
def load_conversations(request):
    if request.method == "POST":
        print("i am in load conv post")
        data = json.loads(request.body)
        fromUser = data.get('fromUser')
        names1 = Message.objects.filter(sender__username=fromUser).values('receiver__username').distinct()
        names2 = Message.objects.filter(receiver__username=fromUser).values('sender__username').distinct()
        names = set()
        for name in names1:
            names.add(name['receiver__username'])
        for name in names2:
            names.add(name['sender__username'])

        result = list()
        for name in names:
            result.append({
                'username': name
            })

        return JsonResponse(result, safe=False)

    return JsonResponse({'success': False, 'message': 'Нельзя при авторизации запрашивать get request'}, status=400)

@csrf_exempt
def create_conversation(request):
    if request.method == "POST":
        print("i am creating tmp")
        data = json.loads(request.body)
        newChatUsername = data.get('newChatUsername')
        try:
            User.objects.get(username=newChatUsername)
            return JsonResponse({'success': True}, status=200)
        except Exception as e:
            return JsonResponse({'success': False}, status=200)

    return JsonResponse({'success': False, 'message': 'Нельзя при авторизации запрашивать get request'}, status=400)
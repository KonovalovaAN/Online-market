# chat/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('messages/', views.MessageView.as_view(), name='message_view'),
    path('login/', views.login, name='login_view'),
    path('load/messages/', views.load_messages, name='load_messages'),
    path('load/conversations/', views.load_conversations, name='load_conversations'),
    path('create_conversation/', views.create_conversation, name='create_conversation'),
]

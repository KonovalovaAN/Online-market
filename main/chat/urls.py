# chat/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('messages/', views.MessageView.as_view(), name='message_view'),
    path('login/', views.login, name='login_view'),
    path('load/', views.load, name='load_view')
]

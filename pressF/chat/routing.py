from django.urls import re_path
from .consumers import ChatConsumer

websocket_urlpatterns = [
    re_path(r'ws/chats/(?P<from_user>\w+)/(?P<to_user>\w+)/$', ChatConsumer.as_asgi()),
]
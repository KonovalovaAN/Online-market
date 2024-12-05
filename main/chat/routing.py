from django.urls import re_path
from . import consumers  # Replace `your_app` with the actual app name

websocket_urlpatterns = [
    re_path(r'ws/chats/(?P<from_user>\w+)/(?P<to_user>\w+)/$', consumers.ChatConsumer.as_asgi()),
]
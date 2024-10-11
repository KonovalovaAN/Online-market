from django.urls import path
from .views import UserView

urlpatterns = [
    path('users/', UserView.as_view(), name='user-list'),            # Для работы с коллекцией пользователей
    path('users/<int:id>/', UserView.as_view(), name='user-detail'),  # Для работы с конкретным пользователем
]

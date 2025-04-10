# urls.py

from django.urls import path
from .views import RegisterView, LoginView, UserView
from rest_framework_simplejwt.views import TokenRefreshView

app_name = 'my_auth'

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/<str:username>/', UserView.as_view(), name='user'),
]

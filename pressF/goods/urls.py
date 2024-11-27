from django.contrib import admin
from django.urls import path
from goods import views

app_name = 'goods'

urlpatterns = [
    path('', views.catalog, name='catalog'),
    path('product/', views.product, name='product'),
    path('api/goods/', views.ProductListView.as_view(), name='rest_catalog'),
]

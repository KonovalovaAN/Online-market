from django.contrib import admin
from django.urls import path
from goods import views

app_name = 'goods'

urlpatterns = [
    path('<slug:category_slug>/', views.catalog, name='catalog'),
    path('product/', views.product, name='product'),
    path('product/<int:product_id>/', views.product_by_id, name='product_by_id'),
    path('api/goods/', views.ProductListView.as_view(), name='rest_catalog'),
]

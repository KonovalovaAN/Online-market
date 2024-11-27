from rest_framework import serializers
from .models import Products

from rest_framework.serializers import ImageField

class CatalogSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)  # Добавляет полный путь к изображению

    class Meta:
        model = Products
        fields = ['name', 'description', 'price', 'image']
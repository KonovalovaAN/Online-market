from rest_framework import serializers
from .models import Good
from rest_framework.serializers import ImageField

class CatalogSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)  # Добавляет полный путь к изображению

    class Meta:
        model = Good
        fields = ['name', 'description', 'price', 'image']
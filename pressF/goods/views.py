from django.shortcuts import render

#Swagger
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from goods.models import Products

class ProductListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        products = [
            {"id": 1, "name": "Laptop", "price": 1000},
            {"id": 2, "name": "Phone", "price": 500},
        ]
        return Response(products, status=status.HTTP_200_OK)
#Swagger

def catalog(request):
    '''goods = [{        'image' : 'deps/images/goods/tablet3.jpg',
        'name' : 'Планшет Teclast P30T 4GB/128GB (серый)',
        'description' : 'some description',
        'price' : 1.00
    }]'''
    images = ['deps/images/goods/tablet3.jpg']
    goods = zip(Products.objects.all(), images)

    context = {
        'title' : 'TechKing - Каталог',
        'goods' : goods,
    }
    return render(request, 'goods/catalog.html', context)

def product(request):
    return render(request, 'goods/product.html')

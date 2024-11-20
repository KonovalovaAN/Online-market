from django.shortcuts import render

#Swagger
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

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
    goods = [{
        'image' : 'deps/images/goods/tablet3.jpg',
        'name' : 'Планшет Teclast P30T 4GB/128GB (серый)',
        'description' : 'some description',
        'price' : 1.00
    }]
    context = {
        'title' : 'TechKing - Каталог',
        'goods' : goods
    }
    return render(request, 'goods/catalog.html', context)

def product(request):
    return render(request, 'goods/product.html')

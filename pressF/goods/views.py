from django.shortcuts import render

#Swagger
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, renderers

from goods.models import Products, Good
from goods.serializer import CatalogSerializer

class ProductListView(APIView):
#    permission_classes = [IsAuthenticated]

    def get(self, request):
        goods = Good.objects.all()
        serializer = CatalogSerializer(goods, many=True)
        return Response(serializer.data)
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



def rest_catalog(request):
    goods = [obj.__dict__() for obj in Products.objects.all()]
    json_renderer = renderers.JSONRenderer()
    return json_renderer.render(goods)

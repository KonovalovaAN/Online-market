from django.shortcuts import render, get_object_or_404

#Swagger
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, renderers

from goods.models import Products, Good, Categories
from goods.serializer import CatalogSerializer

from django.forms.models import model_to_dict
from django.http import JsonResponse

class ProductListView(APIView):
#    permission_classes = [IsAuthenticated]

    def get(self, request):
        goods = Good.objects.all()
        serializer = CatalogSerializer(goods, many=True)
        return Response(serializer.data)
#Swagger

def catalog(request, category_slug):

    if category_slug == 'all':
        goods = Products.objects.all() #zip(Products.objects.all(), images)
    else:
        id = Categories.objects.get(slug=category_slug).id
        goods = get_object_or_404(Products.objects.filter(category__id=id))
    context = {
        'title' : 'TechKing - Каталог',
        'goods' : goods,
    }
    return render(request, 'goods/catalog.html', context)


def product_by_id(request, product_id):
    product = Good.objects.get(id=product_id)
    serializer = CatalogSerializer(product, many=False)
    return JsonResponse(serializer.data)
#    return render(request, 'goods/product.html', context=context)

def product(request):
    return render(request, 'goods/product.html')

def rest_catalog(request):
    goods = [obj.__dict__() for obj in Products.objects.all()]
    json_renderer = renderers.JSONRenderer()
    return json_renderer.render(goods)

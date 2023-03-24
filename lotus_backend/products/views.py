from django.shortcuts import render

from rest_framework.generics import ListAPIView
# Create your views here.
from .models import ProductCategory

# take serializer and give it to the consumer
from .serializers import ProductCategorySerializer


class ProductCategoryListView(ListAPIView):
  serializer_class = ProductCategorySerializer
  queryset = ProductCategory.objects.all()

from rest_framework import serializers
from .models import ProductCategory

class ProductCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductCategory
    fields = "__all__"
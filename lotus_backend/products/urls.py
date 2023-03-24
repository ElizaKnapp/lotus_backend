from django.contrib import admin
from django.urls import include, path
from .views import ProductCategoryListView

app_name = "products"

urlpatterns = [
  path("categories", ProductCategoryListView.as_view(), name="categories-list")
]

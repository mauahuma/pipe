from django.contrib import admin
from productos.models import Productos
# Register your models here.
@admin.register(Productos)
class ProductosAdmin(admin.ModelAdmin):
    pass
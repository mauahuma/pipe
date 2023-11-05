from rest_framework.serializers import ModelSerializer

from productos.models import Productos


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Productos
        fields = ['id', 'nombre', 'stock_critico', 'stock_actual','descripcion']

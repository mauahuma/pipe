from rest_framework.viewsets import ModelViewSet

from productos.models import Productos
from productos.api.serializers import ProductSerializer

class ProductoApiViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Productos.objects.all()

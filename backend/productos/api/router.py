from rest_framework.routers import DefaultRouter

from productos.api.views import ProductoApiViewSet

router_product = DefaultRouter()

router_product.register(
    prefix='productos', basename='productos', viewset=ProductoApiViewSet
)

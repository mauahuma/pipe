from django.db import models

# Create your models here.

class Productos(models.Model):
    nombre = models.CharField(max_length=100)
    stock_critico= models.IntegerField()
    stock_actual= models.IntegerField()
    descripcion = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

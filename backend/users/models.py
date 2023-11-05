from django.db import models
from django.contrib.auth.models import AbstractUser

tipoUsuarioEnum = (
    ("ADMINISTRADOR", "administrador"),
    ("CLIENTE", "cliente"),
    
)


class User(AbstractUser):
    email = models.EmailField(unique=True)
    tipoUsuario = models.CharField(max_length=100,  null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

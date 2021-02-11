from django.db import models

# Create your models here.
class Locker (models.Model):#python manage.py makemigrations // python manage.py migrate
    num_casillero = models.TextField(blank=True, max_length=100, verbose_name='num_casillero')
    estado = models.TextField(blank=True, max_length=100, verbose_name='estado')
    email = models.EmailField(blank=True, max_length=100, verbose_name='email')
    codigo = models.TextField(blank=True, max_length=100, verbose_name='codigo')
    

    def __str__(self):
        return self.num_casillero

    def crear (estado):
        codigo= estado+'chao'

    class meta:
        ordering = ['num_casillero']
        verbose_name = 'num_casillero'
        verbose_name_plural = 'num_casillero'

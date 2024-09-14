from django.db import models


class Image(models.Model):
    descriptions = models.TextField()
    src = models.ImageField(upload_to='images/')

from rest_framework import generics

from .models import Image
from .serializers import ImageSerializer


class ImageListUploadAPIView(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

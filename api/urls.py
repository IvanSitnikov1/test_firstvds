from django.urls import path

from .views import ImageListUploadAPIView, ImageRetrieveAPIView


urlpatterns = [
    path('images/', ImageListUploadAPIView.as_view(), name='image_list_upload'),
    path('images/<int:pk>/', ImageRetrieveAPIView.as_view(), name='image_retrieve'),
]
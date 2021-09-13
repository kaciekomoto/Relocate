from django.urls import path
from . import views
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('location/', views.LocationList.as_view(), name='location_list'),
    path('location/<int:pk>', views.LocationDetail.as_view(), name='location_detail'),
    path('comment/', views.CommentList.as_view(), name='comment_list'),
    path('comment/<int:pk>', views.CommentDetail.as_view(), name='comment_detail'),
]
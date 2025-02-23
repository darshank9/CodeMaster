from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'challenges', views.ChallengeViewSet, basename='challenge')

urlpatterns = [
    path('', include(router.urls)),
]

from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    # Other URLs
]
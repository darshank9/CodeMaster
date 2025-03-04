# core/urls.py
from django.urls import path, include, re_path  # Add re_path here
from django.views.generic import TemplateView
from . import views
from challenges.views import ChallengeList

urlpatterns = [
    path('api/', include('challenges.urls')),  # Your API endpoints
     path('api/challenges/', ChallengeList.as_view(), name='challenge-list'),
    path('api/auth/', include('users.urls')),  # Authentication endpoints
    path('api-auth/', include('rest_framework.urls')),  # DRF auth
]


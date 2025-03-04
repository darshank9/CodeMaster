from django.urls import path
from .views import ChallengeList

urlpatterns = [
    path('', ChallengeList.as_view(), name='challenge-list'),
]
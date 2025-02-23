from rest_framework import viewsets
from .models import Challenge
from .serializers import ChallengeSerializer

class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer
    http_method_names = ['get', 'post', 'patch', 'delete']  # Limit to needed methods
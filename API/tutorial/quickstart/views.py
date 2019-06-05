from django.contrib.auth.models import User, Group
from tutorial.quickstart.models import Project
from rest_framework import viewsets
from tutorial.quickstart.serializers import UserSerializer, GroupSerializer, ProjectSerializer
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class CmsViewSet(viewsets.ModelViewSet):
    #permission_classes = (IsAuthenticated,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# Create your views here.

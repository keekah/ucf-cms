from django.contrib.auth.models import User, Group
from tutorial.quickstart.models import Project, Student, StudentProjectRanking
from rest_framework import viewsets
from tutorial.quickstart.serializers import UserSerializer, GroupSerializer, ProjectSerializer
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

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

@csrf_exempt
def SubmitAssignmentOne(request):
    try:
        data = request.POST
        Student.objects.create(firstName=data['firstName'], lastName=data['lastName'], knightsEmail=data['knightsEmail'],
                               UCFID=data['UCFID'], overallGPA=data['overallGPA'], majorGPA=data['majorGPA'],
                               term=data['term'], intrestArea=data['intrestArea'], technicalSkills=data['technicalSkills'],
                               knownLanguages=data['knownLanguages'], workExperience=data['workExperience'])
        return HttpResponse(status=200)
    except Exception as e:
        return HttpResponse(status=400, content=str(e))


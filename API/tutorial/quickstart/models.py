from django.db import models

class Project(models.Model):
    Sponsor = models.CharField(max_length=100)
    Sponsor2 = models.CharField(max_length=100, blank=True)
    ProjectName = models.CharField(max_length=100)
    Year = models.CharField(max_length=100)
    Term = models.CharField(max_length=100)

class Student(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    knightsEmail = models.CharField(max_length=100)
    term = models.CharField(max_length=100, blank=True)
    UCFID = models.IntegerField(blank=True, default=0)
    overallGPA = models.FloatField(blank=True, default=0)
    majorGPA = models.FloatField(blank=True, default=0)
    intrestArea = models.TextField(blank=True)
    technicalSkills = models.TextField(blank=True)
    knownLanguages = models.TextField(blank=True)
    workExperience = models.TextField(blank=True)
    resumeLink = models.TextField(blank=True, default="N/A")

class StudentProjectRanking(models.Model):
    StudentID = models.IntegerField()
    ProjectID = models.IntegerField()
    Ranking = models.IntegerField()

from django.db import models

class Project(models.Model):
    Sponsor = models.CharField(max_length=100)
    Sponsor2 = models.CharField(max_length=100, blank=True)
    ProjectName = models.CharField(max_length=100)
    Year = models.CharField(max_length=100)
    Term = models.CharField(max_length=100)
# Create your models here.

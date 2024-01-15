from django.db import models
from datetime import date
from django.contrib import admin
from django.contrib.auth.models import User

class Company(models.Model):
    CompanyFullName = models.CharField(max_length=255, null=True, blank=True)
    CompanyShortName = models.CharField(max_length=50, null=True, blank=True)
    CompanyLogo = models.ImageField(height_field=10, width_field=10, null=True, blank=True)
    CompanyAddress = models.CharField(max_length=50, null=True, blank=True)
    CompanyPhone = models.CharField(max_length=50, null=True, blank=True)
    CompanyFax = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return self.CompanyShortName
    
    class Meta:
        verbose_name_plural = "Companies"

class Efforts(models.Model):
    EffortsId = models.CharField(max_length=127, null=True, blank=True)
    
    
    def __str__(self):
        return self.EffortsId
    
    class Meta:
        verbose_name_plural = "Efforts"

class Task(models.Model):
    CompanyName = models.ForeignKey(Company, on_delete=models.PROTECT, null=True, blank=True)
    TaskId = models.CharField(max_length=32, null=True, blank=True)
    TaskName = models.CharField(max_length=255)
    DateRegistration = models.DateTimeField(default=date.today, db_index=True)
    SituationName = models.ForeignKey('Situation', on_delete=models.PROTECT)
    ServiceName = models.ManyToManyField('Service', through='ServiceSet')
    PersonFullName = models.ForeignKey('Person', on_delete=models.PROTECT)
    ITTaskTypeName = models.ForeignKey('ITTaskType', on_delete=models.PROTECT)
    TypeOfActionName = models.ForeignKey('TypeOfAction', on_delete=models.PROTECT)
    Description = models.CharField(max_length=255)
    CategoryOfTaskName = models.ManyToManyField('CategoryOfTask')
    ResultOfTaskName = models.ForeignKey('ResultOfTask', on_delete=models.PROTECT)
    DateOfDone = models.DateTimeField(default=None)
    Comments = models.URLField(max_length=1000)
    manual_selection = models.PositiveIntegerField()
    manual_sort = models.PositiveIntegerField()
    PriorityColor = models.PositiveIntegerField()
    ProjectName = models.ForeignKey('self', on_delete=models.PROTECT)
    Priority = models.OneToOneField('PriorityInfo', on_delete=models.PROTECT)
    Author = models.ForeignKey('auth.User', on_delete=models.PROTECT, null=True, blank=True)
    TaskTypeId = models.ForeignKey('TaskType', on_delete=models.PROTECT, null=True, blank=True)
    EffortsId = models.ManyToManyField(Efforts, through="EffortsStats")
    
    def __str__(self):
        return self.TaskName[:50]

class Situation(models.Model):
    SituationType = models.CharField(max_length=50)
    
    def __str__(self):
        return self.SituationType

class Service(models.Model):
    ServiceName = models.CharField(max_length=50)
    
    def __str__(self):
        return self.ServiceName

class Person(models.Model):
    Name = models.CharField(max_length=50, null=True, blank=True)
    Surname = models.CharField(max_length=50, null=True, blank=True)
    Patronymic = models.CharField(max_length=50, null=True, blank=True)
    PersonFullName = models.CharField(max_length=150, null=True, blank=True)
    WorkPhone = models.CharField(max_length=4, null=True, blank=True)
    MobilePhone = models.CharField(max_length=11, null=True, blank=True)
    Email = models.CharField(max_length=255, null=True, blank=True)
    DepartmentName  = models.ForeignKey('Department', on_delete=models.PROTECT, null=True, blank=True)
    Position = models.CharField(max_length=150, null=True, blank=True)
    CompanyName = models.ForeignKey(Company, on_delete=models.PROTECT, null=True, blank=True)
    
    def __str__(self):
        return self.FullName
    
    class Meta:
        verbose_name_plural = "People"

class Department(models.Model):
    DepartmentName = models.CharField(max_length=100)
    
    def __str__(self):
        return self.DepartmentName

class ITTaskType(models.Model):
    ITTaskTypeName = models.CharField(max_length=50)
    
    def __str__(self):
        return self.ITTaskTypeName
    
    class Meta:
        verbose_name_plural = "IT Task Type"

class TypeOfAction(models.Model):
    TypeOfActionName = models.CharField(max_length=50)
    
    def __str__(self):
        return self.TypeOfActionName

class CategoryOfTask(models.Model):
    CategoryOfTaskName = models.CharField(max_length=50)
    
    def __str__(self):
        return self.CategoryOfTaskName
    
    class Meta:
        verbose_name_plural = "Category Of Task"

class ResultOfTask(models.Model):
    ResultOfTaskName = models.CharField(max_length=50)
    
    def __str__(self):
        return self.ResultOfTaskName
    
    class Meta:
        verbose_name_plural = "Result Of Task"


class EffortsStats(models.Model):
    EffortsId = models.ForeignKey(Efforts, on_delete=models.CASCADE)
    TaskId = models.ForeignKey(Task, on_delete=models.CASCADE)
    Comments = models.TextField()
    TimeOfAction = models.TimeField()
    DateOfAction = models.DateTimeField(default=None)
    StartTimeThisDay = models.TimeField()
    FinishTimeThisDay = models.TimeField()
    
    class Meta:
        verbose_name_plural = "EffortsStats"

class ServiceSet(models.Model):
    ServiceId = models.ForeignKey(Service, on_delete=models.CASCADE)
    TaskId = models.ForeignKey(Task, on_delete=models.CASCADE)

class PriorityInfo(models.Model):
    PriorityWeight = models.DecimalField(null=False, blank=False, max_digits=5, decimal_places=2)
    QuantityOfAsk = models.PositiveIntegerField()
    UsersConcern = models.PositiveIntegerField()
    AllUsersCnt = models.PositiveIntegerField()
    UsersProcent = models.DecimalField(null=False, blank=False, max_digits=5, decimal_places=2)
    PriorityName = models.CharField(max_length=255)
    PriorityCalculated = models.DecimalField(null=False, blank=False, max_digits=5, decimal_places=2)
    NpriorCalculated = models.PositiveIntegerField()
    RealPriority = models.DecimalField(null=False, blank=False, max_digits=6, decimal_places=4)
    
    def __str__(self):
        return self.PriorityWeight
    
    class Meta:
        verbose_name_plural = "Priority Info"

class TaskType(models.Model):
    TaskTypeName = models.CharField(max_length=50)
    
    class Meta:
        verbose_name_plural = "Task Type"


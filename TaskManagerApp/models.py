from django.db import models
from datetime import date
from django.contrib import admin
from django.contrib.auth.models import User



class Company(models.Model):
    FullName = models.CharField(max_length=255, null=True, blank=True)
    ShortName = models.CharField(max_length=50, null=True, blank=True)
    Logo = models.ImageField(height_field=10, width_field=10, null=True, blank=True)
    Address = models.CharField(max_length=50, null=True, blank=True)
    Phone = models.CharField(max_length=50, null=True, blank=True)
    Fax = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return self.ShortName
    
    class Meta:
        verbose_name_plural = "Companies"


class Service(models.Model):
    ServiceName = models.CharField(max_length=50)
    
    def __str__(self):
        return self.ServiceName



class Task(models.Model):
    CompanyId = models.ForeignKey('Company', on_delete=models.PROTECT, null=True, blank=True)
    TaskId = models.CharField(max_length=32, null=True, blank=True)
    TaskName = models.CharField(max_length=255)
    DateRegistration = models.DateTimeField(default=None, null=True, blank=True)
    SituationType = models.ForeignKey('Situation', on_delete=models.PROTECT)
    ServiceName = models.ManyToManyField('Service', through='ServiceSet')
    PersonFullNameId = models.ForeignKey('Person', on_delete=models.PROTECT, related_name='PersonFullNameIds')
    ITTaskTypeName = models.ForeignKey('ITTaskType', on_delete=models.PROTECT)
    TypeOfActionName = models.ForeignKey('TypeOfAction', on_delete=models.PROTECT)
    Description = models.CharField(max_length=255,  null=True, blank=True)
    CategoryOfTaskName = models.ManyToManyField('CategoryOfTask', through='CategorySet')
    ResultOfTaskName = models.ForeignKey('ResultOfTask', on_delete=models.PROTECT, null=True, blank=True)
    DateOfDone = models.DateTimeField(default=None, null=True, blank=True)
    Comments = models.URLField(max_length=1000, null=True, blank=True)
    manual_selection = models.PositiveIntegerField(null=True, blank=True)
    manual_sort = models.PositiveIntegerField(null=True, blank=True)
    PriorityColor = models.PositiveIntegerField(null=True, blank=True)
    ProjectName = models.ForeignKey('self', on_delete=models.PROTECT, null=True, blank=True)
    Priority = models.OneToOneField('PriorityInfo', on_delete=models.PROTECT,  null=True, blank=True)
    CreatedByUser = models.ForeignKey('auth.User', on_delete=models.PROTECT, null=True, blank=True)
    TaskTypeId = models.ForeignKey('TaskType', on_delete=models.PROTECT, null=True, blank=True)
    EffortsId = models.ForeignKey('EffortsStats', on_delete=models.PROTECT, null=True, blank=True)
    
    
    def __str__(self):
        return self.TaskName[:50]

class Situation(models.Model):
    SituationType = models.CharField(max_length=50)
    
    def __str__(self):
        return self.SituationType


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
        return self.PersonFullName
    
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


class CategorySet(models.Model):
    CategoryId = models.ForeignKey(CategoryOfTask, on_delete=models.CASCADE)
    TaskId = models.ForeignKey(Task, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name_plural = "CategorySets"


class ResultOfTask(models.Model):
    Name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.Name
    
    class Meta:
        verbose_name_plural = "Result Of Task"


class EffortsStats(models.Model):
    Comments = models.TextField()
    TimeOfAction = models.TimeField()
    DateOfAction = models.DateTimeField(default=None)
    
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

class OfficeCalendar(models.Model):
    Date = models.DateField(default=None)
    isWorkday = models.BooleanField()


class OfficeHours(models.Model):
    Date = models.DateField(default=None)
    WorkdayStart = models.TimeField(default=None, blank=True)
    WorkdayEnd = models.TimeField(default=None, blank=True)

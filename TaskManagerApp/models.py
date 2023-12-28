from django.db import models
from datetime import date
from django.contrib import admin

class Task(models.Model):
  TaskName = models.CharField(max_length=255)
  DateRegistration = models.DateTimeField(default=date.today, db_index=True)
  SituationName = models.ForeignKey('Situation', on_delete=models.PROTECT)
  ServiceName = models.ForeignKey('Service', on_delete=models.PROTECT)
  PersonFullName = models.ForeignKey('Person', on_delete=models.PROTECT)
  ITTaskTypeName = models.ForeignKey('ITTaskType', on_delete=models.PROTECT)
  TypeOfActionName = models.ForeignKey('TypeOfAction', on_delete=models.PROTECT)
  Description = models.CharField(max_length=255)
  CategoryOfTaskName = models.ForeignKey('CategoryOfTask', on_delete=models.PROTECT)
  ResultOfTaskName = models.ForeignKey('ResultOfTask', on_delete=models.PROTECT)
  DateOfDone = models.DateTimeField(default=None)
  Comments = models.URLField(max_length=1000)
  manual_selection = models.PositiveIntegerField()
  manual_sort = models.PositiveIntegerField()
  PriorityColor = models.PositiveIntegerField()
  ProjectName = models.ForeignKey('self', on_delete=models.PROTECT)
  ProcentDone = models.FloatField()
  # фактическое время исполнения
  # Береться из таблицы трудозатрат
  ActualExecutionTime = models.ForeignKey('ExecutionTime', on_delete=models.PROTECT)
  Priority = models.OneToOneField('PriorityInfo', on_delete=models.PROTECT)
  
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
  Name = models.CharField(max_length=50)
  Surname = models.CharField(max_length=50)
  Patronymic = models.CharField(max_length=50)
  FullName = models.CharField(max_length=150)
  DepartmentName = models.ForeignKey('Department', on_delete=models.PROTECT)

class PersonAdmin(admin.ModelAdmin):
  list_display = ['FullName', 'DepartmentName']


class Department(models.Model):
  DepartmentName = models.CharField(max_length=100)
  
  def __str__(self):
    return self.DepartmentName

class ITTaskType(models.Model):
  ITTaskTypeName = models.CharField(max_length=50)
  
  def __str__(self):
    return self.ITTaskTypeName

class TypeOfAction(models.Model):
  TypeOfActionName = models.CharField(max_length=50)
  
  def __str__(self):
    return self.TypeOfActionName

class CategoryOfTask(models.Model):
  CategoryOfTaskName = models.CharField(max_length=50)
  
  def __str__(self):
    return self.CategoryOfTaskName

class ResultOfTask(models.Model):
  ResultOfTaskName = models.CharField(max_length=50)
  
  def __str__(self):
    return self.ResultOfTaskName
  
  class Meta:
      verbose_name_plural = "ResultOfTask"
  
class ExecutionTime(models.Model):
  TimeExec = models.TimeField()
  
  def __str__(self):
    return self.TimeExec

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
      verbose_name_plural = "PriorityInfo"


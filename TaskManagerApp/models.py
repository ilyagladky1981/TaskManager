from django.db import models
from datetime import date

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

class Situation(models.Model):
  SituationType = models.CharField(max_length=50)

class Service(models.Model):
  ServiceName = models.CharField(max_length=50)

class Person(models.Model):
  Name = models.CharField(max_length=50)
  Surname = models.CharField(max_length=50)
  Patronymic = models.CharField(max_length=50)
  FullName = models.CharField(max_length=150)
  DepartmentName = models.ForeignKey('Department', on_delete=models.PROTECT)

class Department(models.Model):
  DepartmentName = models.CharField(max_length=100)

class ITTaskType(models.Model):
  ITTaskTypeName = models.CharField(max_length=50)

class TypeOfAction(models.Model):
  TypeOfActionName = models.CharField(max_length=50)

class CategoryOfTask(models.Model):
  CategoryOfTaskName = models.CharField(max_length=50)

class ResultOfTask(models.Model):
  ResultOfTaskName = models.CharField(max_length=50)
  
class ExecutionTime(models.Model):
  TimeExec = models.TimeField()

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
